import React from 'react';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header';
import { Box } from 'components/Box/Box';
import Loader from 'components/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Box as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

export default SharedLayout;
