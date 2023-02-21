import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { GlobalStyle } from 'App.styled';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { selectTokenState } from 'redux/user/userSelectors';
import Loader from 'components/Loader';
import {
  Friends,
  Home,
  Login,
  News,
  NotFound,
  Notices,
  Register,
  SharedLayout,
  User,
} from 'lazyLoading';
import { AnimatePresence } from 'framer-motion';

const App = () => {
  const location = useLocation();
  const token = useSelector(selectTokenState);
  const { data, isFetching } = useGetCurrentUserQuery(null, {
    skip: token === null,
  });

  if (isFetching) return <Loader />;

  return (
    <>
      <AnimatePresence>
        <Suspense fallback={<Loader />}>
          <Routes location={location}>
            <Route path="/" element={<SharedLayout />} key={location.key}>
              <Route index element={<Home />} key={location.key} />
              <Route
                path="register"
                element={<Register />}
                key={location.key}
              />
              <Route path="login" element={<Login />} key={location.key} />
              <Route path="user" element={<User />} key={location.key} />
              <Route path="friends" element={<Friends />} key={location.key} />
              <Route path="news" element={<News />} key={location.key} />
              <Route path="notices" element={<Notices />} key={location.key} />
              <Route path="*" element={<NotFound />} key={location.key} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
      <GlobalStyle />
    </>
  );
};

export default App;
