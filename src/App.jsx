import React, { Suspense } from 'react';
import { GlobalStyle } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { useSelector } from 'react-redux';
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

const App = () => {
  const token = useSelector(selectTokenState);
  const { data, isLoading } = useGetCurrentUserQuery(null, {
    skip: token === null,
  });

  if (isLoading) return <Loader />;

  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path="user" element={<User />} />
            <Route path="friends" element={<Friends />} />
            <Route path="news" element={<News />} />
            <Route path="notices" element={<Notices />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};

export default App;
