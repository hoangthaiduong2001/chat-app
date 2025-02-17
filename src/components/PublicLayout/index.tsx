import { getUser } from '@/config/storage';
import { paths } from '@/routes/path';
import { Navigate, Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  const user = getUser();
  if (user) {
    return <Navigate to={paths.chat} />;
  }
  return (
    <>
      <Outlet />
    </>
  );
};
