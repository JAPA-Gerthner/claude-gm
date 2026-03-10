/**
 * Socket.IO Client with Protobuf serialization
 *
 * Connects to game gateway and handles protobuf encoding/decoding.
 */

import { io, Socket } from 'socket.io-client';
import {
  JoinRoomRequest,
  JoinRoomResponse,
  LeaveRoomRequest,
  ChatMessageRequest,
  ChatMessageResponse,
  ChatStreamChunk,
  PlayerJoined,
  PlayerLeft,
  CompactionStatus,
  RoomMember,
} from '../gen/questkeeper/v1/questkeeper_pb';

export interface GameSocketEvents {
  onChatMessage: (message: ChatMessageResponse) => void;
  onChatChunk: (chunk: ChatStreamChunk) => void;
  onPlayerJoined: (event: PlayerJoined) => void;
  onPlayerLeft: (event: PlayerLeft) => void;
  onCompactionStatus: (status: CompactionStatus) => void;
  onConnect: () => void;
  onDisconnect: () => void;
  onError: (error: Error) => void;
}

export class GameSocket {
  private socket: Socket | null = null;
  private events: Partial<GameSocketEvents> = {};
  private token: string;
  private currentRoom: string | null = null;

  constructor(token: string) {
    this.token = token;
  }

  /**
   * Connect to the game socket
   */
  connect(): void {
    if (this.socket?.connected) return;

    this.socket = io('/game', {
      auth: { token: this.token },
      transports: ['websocket'], // Force websocket for binary support
    });

    this.setupListeners();
  }

  /**
   * Disconnect from the socket
   */
  disconnect(): void {
    if (this.currentRoom) {
      this.leaveRoom(this.currentRoom);
    }
    this.socket?.disconnect();
    this.socket = null;
  }

  /**
   * Register event handlers
   */
  on<K extends keyof GameSocketEvents>(event: K, handler: GameSocketEvents[K]): void {
    this.events[event] = handler;
  }

  /**
   * Join a game room
   */
  async joinRoom(gameSessionId: string): Promise<JoinRoomResponse> {
    if (!this.socket) throw new Error('Not connected');

    const request = new JoinRoomRequest({
      gameSessionId,
      token: this.token,
    });

    return new Promise((resolve, reject) => {
      this.socket!.emit('join', request.toBinary(), (response: Uint8Array) => {
        try {
          const res = JoinRoomResponse.fromBinary(new Uint8Array(response));
          if (res.success) {
            this.currentRoom = gameSessionId;
          }
          resolve(res);
        } catch (err) {
          reject(err);
        }
      });
    });
  }

  /**
   * Leave current room
   */
  leaveRoom(gameSessionId: string): void {
    if (!this.socket) return;

    const request = new LeaveRoomRequest({ gameSessionId });
    this.socket.emit('leave', request.toBinary());
    this.currentRoom = null;
  }

  /**
   * Send chat message
   */
  sendMessage(gameSessionId: string, content: string, displayContent?: string): void {
    if (!this.socket) return;

    const request = new ChatMessageRequest({
      gameSessionId,
      content,
      displayContent,
    });

    this.socket.emit('chat', request.toBinary());
  }

  /**
   * Get current room members
   */
  getCurrentRoom(): string | null {
    return this.currentRoom;
  }

  /**
   * Check if connected
   */
  isConnected(): boolean {
    return this.socket?.connected ?? false;
  }

  /**
   * Setup socket event listeners
   */
  private setupListeners(): void {
    if (!this.socket) return;

    this.socket.on('connect', () => {
      console.log('[GameSocket] Connected');
      this.events.onConnect?.();
    });

    this.socket.on('disconnect', () => {
      console.log('[GameSocket] Disconnected');
      this.currentRoom = null;
      this.events.onDisconnect?.();
    });

    this.socket.on('connect_error', (err) => {
      console.error('[GameSocket] Connection error:', err);
      this.events.onError?.(err);
    });

    // Chat message from another player or GM
    this.socket.on('chatMessage', (data: ArrayBuffer) => {
      try {
        const message = ChatMessageResponse.fromBinary(new Uint8Array(data));
        this.events.onChatMessage?.(message);
      } catch (err) {
        console.error('[GameSocket] Failed to decode chatMessage:', err);
      }
    });

    // Streaming chunk from GM
    this.socket.on('chatChunk', (data: ArrayBuffer) => {
      try {
        const chunk = ChatStreamChunk.fromBinary(new Uint8Array(data));
        this.events.onChatChunk?.(chunk);
      } catch (err) {
        console.error('[GameSocket] Failed to decode chatChunk:', err);
      }
    });

    // Player joined room
    this.socket.on('playerJoined', (data: ArrayBuffer) => {
      try {
        const event = PlayerJoined.fromBinary(new Uint8Array(data));
        this.events.onPlayerJoined?.(event);
      } catch (err) {
        console.error('[GameSocket] Failed to decode playerJoined:', err);
      }
    });

    // Player left room
    this.socket.on('playerLeft', (data: ArrayBuffer) => {
      try {
        const event = PlayerLeft.fromBinary(new Uint8Array(data));
        this.events.onPlayerLeft?.(event);
      } catch (err) {
        console.error('[GameSocket] Failed to decode playerLeft:', err);
      }
    });

    // Compaction status update
    this.socket.on('compactionStatus', (data: ArrayBuffer) => {
      try {
        const status = CompactionStatus.fromBinary(new Uint8Array(data));
        this.events.onCompactionStatus?.(status);
      } catch (err) {
        console.error('[GameSocket] Failed to decode compactionStatus:', err);
      }
    });
  }
}

// Singleton instance (will be initialized with token)
let gameSocket: GameSocket | null = null;

export function getGameSocket(token?: string): GameSocket {
  if (!gameSocket && token) {
    gameSocket = new GameSocket(token);
  }
  if (!gameSocket) {
    throw new Error('GameSocket not initialized. Call with token first.');
  }
  return gameSocket;
}

export function disconnectGameSocket(): void {
  gameSocket?.disconnect();
  gameSocket = null;
}
