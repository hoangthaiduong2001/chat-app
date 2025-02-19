import { httpClient } from '@/config/http';
import { OnlineUsers } from '@/types/user';
import { useQuery } from '@tanstack/react-query';

const apiUrl = import.meta.env.VITE_API_URL;

const getOnlineUser = async () => {
  return httpClient<OnlineUsers, unknown>(`${apiUrl}/api/users/online`, 'GET');
};

export const useGetUserOnline = () => {
  return useQuery({
    queryKey: ['user-online'],
    queryFn: getOnlineUser,
  });
};
