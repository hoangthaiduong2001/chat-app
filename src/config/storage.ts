import { LoginResType } from '@/types/auth';

export const setDataToSessionStorage = (value: LoginResType) => {
  sessionStorage.setItem('username', value.username);
};

export const getUser = () => {
  return sessionStorage.getItem('username');
};
