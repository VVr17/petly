import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header/Header';
import { Box } from 'components/Box/Box';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Suspense fallback="Loading...">
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default SharedLayout;
