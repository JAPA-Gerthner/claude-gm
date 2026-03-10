FROM golang:1.22-alpine AS builder

WORKDIR /build
COPY go.mod go.sum ./
RUN go mod download
COPY main.go ./
COPY gen/ ./gen/
RUN go build -o server main.go

FROM node:20-alpine

# Install Python and bash for dice generation and tools
RUN apk add --no-cache python3 bash

# Install Claude Code CLI
RUN npm install -g @anthropic-ai/claude-code

# Copy Go binary
COPY --from=builder /build/server /app/server
RUN chown node:node /app/server

# Create .claude directory for node user
RUN mkdir -p /home/node/.claude && chown -R node:node /home/node

WORKDIR /app
USER node

EXPOSE 3001

CMD ["./server"]
