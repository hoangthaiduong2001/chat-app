import { LoginResType } from '@/types/auth';
import { IMessage } from '@/types/message';

export const setDataToSessionStorage = (data: LoginResType) => {
  sessionStorage.setItem('userInfo', JSON.stringify(data));
};
export const setIdSocketToSessionStorage = (data: string) => {
  sessionStorage.setItem('socketId', data);
};

export const getIdSocket = (): string => {
  return sessionStorage.getItem('socketId') || '';
};

export const getUser = (): LoginResType | null => {
  const userInfo = sessionStorage.getItem('userInfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return null;
};

export const setUserSelectedToSessionStorage = (data: LoginResType) => {
  sessionStorage.setItem('userSelected', JSON.stringify(data));
};

export const getUserSelected = () => {
  return sessionStorage.getItem('userSelected');
};

export const setMessagesToSessionStorage = (data: IMessage[]) => {
  sessionStorage.setItem('messages', JSON.stringify(data));
};

export const getMessages = () => {
  return sessionStorage.getItem('messages');
};

export const clearDataSessionStorage = () => {
  sessionStorage.clear();
};
