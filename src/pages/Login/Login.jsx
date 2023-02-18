import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import { logout } from '../../redux/api/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector(state => state.user);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {isAuth ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <LoginForm />
      )}
    </div>
  );
};

export default Login;
