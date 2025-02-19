import { LoginResType } from '@/types/auth';

export const setDataToSessionStorage = (data: LoginResType) => {
  sessionStorage.setItem('userInfo', JSON.stringify(data));
};

export const getUser = (): LoginResType | null => {
  const userInfo = sessionStorage.getItem('userInfo');
  if (userInfo) {
    return JSON.parse(userInfo);
  }
  return null;
};

export const clearDataToSessionStorage = () => {
  sessionStorage.removeItem('userInfo');
};
