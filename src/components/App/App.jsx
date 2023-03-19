import React, { Suspense, useState } from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useGetCurrentUserQuery } from 'redux/api/userApi';
import { IntlProvider } from 'react-intl';
import { selectTokenState } from 'redux/user/userSelectors';
import Loader from 'components/Loader';
import {
  EmailVerified,
  Friends,
  Home,
  Login,
  News,
  NotFound,
  Notices,
  Register,
  SharedLayout,
  User,
} from './lazyLoading';
import { RestrictedRoute } from 'components/Routes/RestrictedRoute';
import { PrivateRoute } from 'components/Routes/PrivateRoute';
import enMessages from 'assets/locales/en.json';
import ukMessages from 'assets/locales/uk.json';
import ToastifyGlobalStyle from './ToastifyGlobalStyle.styled';
import { GlobalStyle } from './App.styled';

const App = () => {
  const [locale, setLocale] = useState('en');
  const location = useLocation();
  const token = useSelector(selectTokenState);
  const { data, isFetching } = useGetCurrentUserQuery(null, {
    skip: token === null,
  });

  const messages = { en: enMessages, uk: ukMessages };

  const handleLocaleChange = e => {
    setLocale(e);
  };

  if (isFetching) return <Loader />;

  return (
    <>
      <IntlProvider messages={messages[locale]} locale={locale}>
        <AnimatePresence>
          <Suspense fallback={<Loader />}>
            <Routes location={location}>
              <Route
                path="/"
                element={
                  <SharedLayout
                    locale={locale}
                    handleLocaleChange={handleLocaleChange}
                  />
                }
                key={location.key}
              >
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
                  element={
                    <PrivateRoute component={User} redirectTo="/login" />
                  }
                />
                <Route
                  path="friends"
                  element={<Friends />}
                  key={location.key}
                />
                <Route path="news" element={<News />} key={location.key} />
                <Route
                  path="notices"
                  element={<Notices />}
                  key={location.key}
                />
                <Route
                  path="EmailVerified"
                  element={<EmailVerified />}
                  key={location.key}
                />
                <Route path="*" element={<NotFound />} key={location.key} />
              </Route>
            </Routes>
          </Suspense>
        </AnimatePresence>
        <GlobalStyle />
        <ToastifyGlobalStyle autoClose={5000} limit={1} />
      </IntlProvider>
    </>
  );
};

export default App;
