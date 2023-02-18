import React from 'react';
import { GlobalStyle } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Friends from 'pages/Friends';
import News from 'pages/News';
import Notices from 'pages/Notices';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import User from 'pages/User';
import NotFound from 'pages/NotFound';
import Sell from 'components/Notices/Sell';
import InGoodHands from 'components/Notices/InGoodHands';
import LostFound from 'components/Notices/LostFound';
import FavoriteAids from 'components/Notices/FaoriteAids';
import MyAids from 'components/Notices/MyAids';

const App = () => {
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
          <Route path="notices" element={<Notices />}>
            <Route path="sell" element={<Sell />} />
            <Route path="in-good-hands" element={<InGoodHands />} />
            <Route path="lost-found" element={<LostFound />} />
            <Route path="favorite-aids" element={<FavoriteAids />} />
            <Route path="my-aids" element={<MyAids />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
