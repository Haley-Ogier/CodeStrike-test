// src/socket.js
import { io } from "socket.io-client";

// Use relative path for production, and fallback to localhost for development
const socket = io(process.env.NODE_ENV === "production" ? undefined : "http://localhost:3001");

// Export the WebSocket instance
export default socket;
