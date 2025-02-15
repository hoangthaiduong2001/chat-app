import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from '../pages/login';
import PageNotFound from '../pages/pageNotFound';
import PublicLayout from '../pages/pagePublic';
import { paths } from './path';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={paths.login} element={<Login />} />
        </Route>
        <Route path={paths.pageNotFound} element={<PageNotFound />} />
        {/* <Route path="/" element={<ProtectedLayout />}>
          <Route path="*" element={<ProtectedRoutes />} />
        </Route> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
