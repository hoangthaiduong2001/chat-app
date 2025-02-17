import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { PrivateLayout } from '@/components/PrivateLayout';
import ChatPage from '@/pages/chat';

import { PublicLayout } from '@/components/PublicLayout';

import LoginPage from '@/pages/login';
import PageNotFound from '@/pages/pageNotFound';
import { paths } from './path';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={paths.login} />} />
        <Route element={<PublicLayout />}>
          <Route path={paths.login} element={<LoginPage />} />
        </Route>
        <Route element={<PrivateLayout />}>
          <Route path={paths.chat} element={<ChatPage />} />
        </Route>
        <Route path="*" element={<Navigate to={paths.pageNotFound} />} />
        <Route path={paths.pageNotFound} element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
