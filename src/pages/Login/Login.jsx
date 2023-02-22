import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { logout } from '../../redux/user/userSlice';
import Section from 'components/Section';
import { Wrapper } from './Login.styled';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Wrapper>
      <Section>
        {isAuth ? <button onClick={handleLogout}>Logout</button> : <LoginForm />}
      </Section>
    </Wrapper>
  );
};

export default Login;
