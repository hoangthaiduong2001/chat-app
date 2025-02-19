import { httpClient } from '@/config/http';
import { LoginBodyType, LoginResType } from '@/types/auth';
import { ErrorType } from '@/types/error';
import { useMutation } from '@tanstack/react-query';

const apiUrl = import.meta.env.VITE_API_URL;

const login = async (body: LoginBodyType) => {
  return httpClient<LoginResType, LoginBodyType>(
    `${apiUrl}/api/auth/login`,
    'POST',
    body
  );
};

export const useLoginMutation = () => {
  return useMutation<LoginResType, ErrorType, LoginBodyType>({
    mutationFn: login,
  });
};
