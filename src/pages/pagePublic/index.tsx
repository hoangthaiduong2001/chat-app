import { Outlet } from 'react-router-dom';

const PublicLayout = () => {
  //   const user = getUserInfo();

  //   if (user) {
  //     return <Navigate to={paths.index} />;
  //   }

  return (
    <>
      <Outlet />
    </>
  );
};

export default PublicLayout;
