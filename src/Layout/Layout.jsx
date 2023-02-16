import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
      layout
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default Layout;
