import { LoginBodyType, LoginResType } from '@/types/auth';
import { ErrorType } from '@/types/error';
import { useMutation } from '@tanstack/react-query';

const baseUrl = import.meta.env.VITE_API_URL;

const login = async (body: LoginBodyType): Promise<LoginResType> => {
  const response = await fetch(`${baseUrl}/api/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }
  return response.json();
};

export const useLoginMutation = () => {
  return useMutation<LoginResType, ErrorType, LoginBodyType>({
    mutationFn: login,
  });
};
