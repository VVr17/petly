import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../Header';
import { Box } from 'components/Box/Box';
import Loader from 'components/Loader';

const SharedLayout = ({ handleLocaleChange }) => {
  return (
    <>
      <Header handleLocaleChange={handleLocaleChange} />
      <Box as="main">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};

SharedLayout.propTypes = {
  handleLocaleChange: PropTypes.func.isRequired,
};

export default SharedLayout;
