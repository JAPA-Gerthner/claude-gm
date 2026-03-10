/**
 * Game Socket.IO Gateway
 *
 * Handles real-time game communication with protobuf serialization.
 * Manages rooms for multiplayer sessions.
 */

import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
  ConnectedSocket,
  MessageBody,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { Logger, Inject, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { OnEvent } from '@nestjs/event-emitter';
import {
  JoinRoomRequest,
  JoinRoomResponse,
  LeaveRoomRequest,
  ChatMessageRequest,
  ChatMessageResponse,
  ChatStreamChunk,
  PlayerJoined,
  PlayerLeft,
  RoomMember,
  CompactionStatus as CompactionStatusProto,
} from '../gen/questkeeper/v1/questkeeper_pb';
import { CompactionStatus } from '../claude/session-compactor';
import { ChatService } from '../chat/chat.service';

interface AuthenticatedSocket extends Socket {
  userId?: string;
  userName?: string;
  userAvatar?: string;
}

interface RoomInfo {
  gameSessionId: string;
  members: Map<string, RoomMember>;
}

@WebSocketGateway({
  namespace: '/game',
  cors: {
    // Dev: allow all origins. Prod: restrict via nginx/reverse proxy
    origin: process.env.CORS_ORIGIN || '*',
  },
})
export class GameGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  private readonly logger = new Logger(GameGateway.name);

  // NOTE: In-memory room tracking. Works for single instance only.
  // For horizontal scaling, use Redis adapter: @socket.io/redis-adapter
  private rooms = new Map<string, RoomInfo>();
  private socketToRoom = new Map<string, string>();

  constructor(
    private jwtService: JwtService,
    @Inject(forwardRef(() => ChatService))
    private chatService: ChatService,
  ) {}

  /**
   * Handle new connection - authenticate via token
   */
  async handleConnection(client: AuthenticatedSocket) {
    try {
      const token = client.handshake.auth?.token || client.handshake.query?.token;

      if (!token) {
        this.logger.warn(`Client ${client.id} connected without token`);
        client.disconnect();
        return;
      }

      const payload = this.jwtService.verify(token as string);
      client.userId = payload.sub;
      client.userName = payload.name;
      client.userAvatar = payload.avatar;

      this.logger.log(`Client ${client.id} authenticated as ${client.userName} (${client.userId})`);
    } catch (err) {
      this.logger.warn(`Client ${client.id} auth failed: ${err}`);
      client.disconnect();
    }
  }

  /**
   * Handle disconnect - leave room, notify others
   */
  handleDisconnect(client: AuthenticatedSocket) {
    const gameSessionId = this.socketToRoom.get(client.id);

    if (gameSessionId && client.userId) {
      this.leaveRoom(client, gameSessionId);
    }

    this.logger.log(`Client ${client.id} disconnected`);
  }

  /**
   * Join a game room
   */
  @SubscribeMessage('join')
  handleJoin(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: Uint8Array,
  ): Uint8Array {
    try {
      const request = JoinRoomRequest.fromBinary(data);
      const { gameSessionId } = request;

      if (!client.userId) {
        return new JoinRoomResponse({
          success: false,
          error: 'Not authenticated',
        }).toBinary();
      }

      // Leave previous room if any
      const prevRoom = this.socketToRoom.get(client.id);
      if (prevRoom) {
        this.leaveRoom(client, prevRoom);
      }

      // Join new room
      client.join(`game:${gameSessionId}`);
      this.socketToRoom.set(client.id, gameSessionId);

      // Track room members
      let room = this.rooms.get(gameSessionId);
      if (!room) {
        room = { gameSessionId, members: new Map() };
        this.rooms.set(gameSessionId, room);
      }

      const member = new RoomMember({
        userId: client.userId,
        name: client.userName || 'Unknown',
        avatar: client.userAvatar || '',
        isOnline: true,
      });
      room.members.set(client.userId, member);

      // Notify others
      const playerJoined = new PlayerJoined({
        gameSessionId,
        player: member,
      });
      client.to(`game:${gameSessionId}`).emit('playerJoined', playerJoined.toBinary());

      this.logger.log(`${client.userName} joined room ${gameSessionId}`);

      // Return current room state
      return new JoinRoomResponse({
        success: true,
        members: Array.from(room.members.values()),
      }).toBinary();
    } catch (err) {
      this.logger.error(`Join error: ${err}`);
      return new JoinRoomResponse({
        success: false,
        error: String(err),
      }).toBinary();
    }
  }

  /**
   * Leave a game room
   */
  @SubscribeMessage('leave')
  handleLeave(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: Uint8Array,
  ): void {
    try {
      const request = LeaveRoomRequest.fromBinary(data);
      this.leaveRoom(client, request.gameSessionId);
    } catch (err) {
      this.logger.error(`Leave error: ${err}`);
    }
  }

  /**
   * Internal leave room logic
   */
  private leaveRoom(client: AuthenticatedSocket, gameSessionId: string): void {
    client.leave(`game:${gameSessionId}`);
    this.socketToRoom.delete(client.id);

    const room = this.rooms.get(gameSessionId);
    if (room && client.userId) {
      room.members.delete(client.userId);

      // Notify others
      const playerLeft = new PlayerLeft({
        gameSessionId,
        userId: client.userId,
      });
      this.server.to(`game:${gameSessionId}`).emit('playerLeft', playerLeft.toBinary());

      // Clean up empty rooms
      if (room.members.size === 0) {
        this.rooms.delete(gameSessionId);
      }

      this.logger.log(`${client.userName} left room ${gameSessionId}`);
    }
  }

  /**
   * Send chat message to room
   */
  @SubscribeMessage('chat')
  async handleChat(
    @ConnectedSocket() client: AuthenticatedSocket,
    @MessageBody() data: Uint8Array,
  ): Promise<void> {
    try {
      const request = ChatMessageRequest.fromBinary(data);

      if (!client.userId) {
        this.logger.warn('Chat from unauthenticated client');
        return;
      }

      // Process message through ChatService (saves to DB, calls Claude, broadcasts)
      await this.chatService.sendMessageViaSocket(
        client.userId,
        client.userName || 'Unknown',
        client.userAvatar,
        request.gameSessionId,
        request.content,
        request.displayContent,
      );
    } catch (err) {
      this.logger.error(`Chat error: ${err}`);
      // TODO: Send error back to client
    }
  }

  /**
   * Broadcast chat message to room
   */
  broadcastChatMessage(gameSessionId: string, message: ChatMessageResponse): void {
    this.server.to(`game:${gameSessionId}`).emit('chatMessage', message.toBinary());
  }

  /**
   * Stream chat response chunk to room
   */
  broadcastStreamChunk(gameSessionId: string, chunk: ChatStreamChunk): void {
    this.server.to(`game:${gameSessionId}`).emit('chatChunk', chunk.toBinary());
  }

  /**
   * Handle compaction status events
   */
  @OnEvent('compaction.status')
  handleCompactionStatus(status: CompactionStatus): void {
    const protoStatus = new CompactionStatusProto({
      gameSessionId: status.gameSessionId,
      step: status.step,
      message: status.message,
      progress: status.progress,
      error: status.error,
    });

    this.server.to(`game:${status.gameSessionId}`).emit('compactionStatus', protoStatus.toBinary());
  }

  /**
   * Get room members
   */
  getRoomMembers(gameSessionId: string): RoomMember[] {
    const room = this.rooms.get(gameSessionId);
    return room ? Array.from(room.members.values()) : [];
  }
}
