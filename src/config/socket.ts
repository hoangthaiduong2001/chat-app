import { io, Socket } from 'socket.io-client';
import { getUser } from './storage';
const user = getUser() || {};

export const socket: Socket = io('http://localhost:4000', {
  auth: {
    user,
  },
  autoConnect: false,
});
