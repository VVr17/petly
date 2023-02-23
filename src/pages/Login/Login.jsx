import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { logout } from '../../redux/user/userSlice';
import AuthPageContainer from 'components/AuthPageContainer';
import Container from 'components/Container';
import Section from 'components/Section';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <AuthPageContainer>
      <Section>
        {isAuth ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <LoginForm />
        )}
      </Section>
    </AuthPageContainer>
  );
};

export default Login;
