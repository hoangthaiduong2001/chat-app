import { io, Socket } from 'socket.io-client';
import { getUser } from './storage';
const user = getUser() || {};

const url = import.meta.env.VITE_API_URL;

export const socket: Socket = io(url, {
  auth: {
    user,
  },
  autoConnect: false,
});
