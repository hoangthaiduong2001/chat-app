import { LoginResType } from './auth';

export type OnlineUsers = LoginResType[];

export type UserOnline = {
  data: LoginResType[];
  event: string;
};

export type UserOnlineError = {
  message: string;
  event: string;
};
