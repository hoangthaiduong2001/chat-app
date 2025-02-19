import { httpClient } from '@/config/http';
import { LogoutBodyType, LogoutResType } from '@/types/auth';
import { ErrorType } from '@/types/error';
import { useMutation } from '@tanstack/react-query';

const apiUrl = import.meta.env.VITE_API_URL;

const logout = async (body: LogoutBodyType) => {
  return httpClient<LogoutResType, LogoutBodyType>(
    `${apiUrl}/api/auth/logout`,
    'POST',
    body
  );
};

export const useLogoutMutation = () => {
  return useMutation<LogoutResType, ErrorType, LogoutBodyType>({
    mutationFn: logout,
  });
};
