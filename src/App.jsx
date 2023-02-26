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
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import ToastifyGlobalStyle from 'components/Ui-Kit/ToastifyGlobalStyle.styled';

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
              <Route index key={location.key} element={<Home />} />
              <Route
                path="/register"
                key={location.key}
                element={
                  <RestrictedRoute component={Register} redirectTo="/user" />
                }
              />
              <Route
                path="/login"
                key={location.key}
                element={
                  <RestrictedRoute component={Login} redirectTo="/user" />
                }
              />
              <Route
                path="user"
                element={<PrivateRoute component={User} redirectTo="/login" />}
              />
              <Route path="friends" element={<Friends />} key={location.key} />
              <Route path="news" element={<News />} key={location.key} />
              <Route path="notices" element={<Notices />} key={location.key} />
              <Route path="*" element={<NotFound />} key={location.key} />
            </Route>
          </Routes>
        </Suspense>
      </AnimatePresence>
      <GlobalStyle />
      <ToastifyGlobalStyle autoClose={5000}  limit={1}/>
    </>
  );
};

export default App;
