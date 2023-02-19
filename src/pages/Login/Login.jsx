import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { logout } from '../../redux/userSlice';
import Section from 'components/Section';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Section>
      {isAuth ? <button onClick={handleLogout}>Logout</button> : <LoginForm />}
    </Section>
  );
};

export default Login;
