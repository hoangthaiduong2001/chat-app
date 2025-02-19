export interface LoginBodyType {
  username: string;
}

export interface LoginResType {
  id: string;
  username: string;
  online: boolean;
}

export interface LogoutBodyType {
  userId: string;
}

export interface LogoutResType {
  message: string;
}
