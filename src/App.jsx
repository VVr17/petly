import React from 'react';
import { GlobalStyle } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import Layout from 'Layout';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Friends from 'pages/Friends';
import News from 'pages/News';
import Notices from 'pages/Notices';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="friends" element={<Friends />} />
          <Route path="news" element={<News />} />
          <Route path="notices" element={<Notices />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

export default App;
