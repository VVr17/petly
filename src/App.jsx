import React from 'react';
import { GlobalStyle } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Friends from 'pages/FriendsPage';
import News from 'pages/News';
import Notices from 'pages/Notices';
import Header from 'components/Header';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="friends" element={<Friends />} />
          <Route path="news" element={<News />} />
          <Route path="notices" element={<Notices />} />
          <Route path="*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
