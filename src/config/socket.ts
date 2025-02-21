import { io, Socket } from 'socket.io-client';
import { getUser } from './storage';
export const socket: Socket = io('http://localhost:4000', {
  auth: getUser() || {},
});
