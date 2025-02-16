import { useMutation } from '@tanstack/react-query';

interface LoginBodyType {
  username: string;
}

interface LoginResType {
  id: string;
  username: string;
  online: boolean;
}

const baseUrl = import.meta.env.VITE_API_URL;

const login = async (body: LoginBodyType): Promise<LoginResType> => {
  console.log('baseUrl', baseUrl);
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
  return useMutation<LoginResType, Error, LoginBodyType>({
    mutationFn: login,
  });
  //   return useMutation<LoginResType, Error, LoginBodyType>({
  //     mutationFn: login,
  //     onSuccess: (data) => {
  //       console.log('Login successful:', data);
  //     },
  //     onError: (error) => {
  //       console.error('Login failed:', error);
  //     },
  //   });
};
