import React from 'react';
import { GlobalStyle } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Friends from 'pages/FriendsPage';
import News from 'pages/News';
import Notices from 'pages/Notices';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import User from 'pages/User';
import NotFound from 'pages/NotFound';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { useSelector } from 'react-redux';
import { selectTokenState } from 'redux/user/userSelectors';

const App = () => {
  const token = useSelector(selectTokenState);
  const { data, isLoading } = useGetCurrentUserQuery(null, {
    skip: token === null,
  });

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
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
      <GlobalStyle />
    </>
  );
};

export default App;
