import React from 'react';
import { GlobalStyle } from 'App.styled';
import { Route, Routes } from 'react-router-dom';
import Header from 'components/Header';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>

        <Route path="/" element={<Header />}>

          <Route index element={<div>Home</div>} />

          <Route path="news" element={<div>NewsPage</div>} />

          <Route path="notices" element={<div>NoticesPage</div>} />

          <Route path="friends" element={<div>OurFriendsPage</div>} />

          <Route path="login" element={<div>LoginPage</div>} />

          <Route path="register" element={<div>RegisterPage</div>} />

          <Route path="user" element={<div>UserPage</div>} />

          <Route path='*' element={<div>Page not found</div>} />

        </Route>

      </Routes>
    </>
  );
};

export default App;
