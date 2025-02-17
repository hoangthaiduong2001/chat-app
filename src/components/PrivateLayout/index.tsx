import { getUser } from '@/config/storage';
import { paths } from '@/routes/path';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';

export const PrivateLayout = () => {
  const navigate = useNavigate();
  const user = getUser();
  const location = useLocation();

  useEffect(() => {
    if (!user) {
      navigate(paths.login);
    }
  }, [location.pathname]);

  if (!user) {
    return <Navigate to={paths.login} />;
  }

  return <Outlet />;
};
