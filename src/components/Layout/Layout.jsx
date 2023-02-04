import { Suspense } from 'react';

import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';
import css from './ContactForm.module.css';

export const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};