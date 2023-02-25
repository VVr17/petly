import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/user/userSlice';

import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  UserCard,
  Title,
  Button,
  LogoutBtn,
  iconStyle,
  UserInfo,
} from './UserData.styled';
import { IoLogOutOutline } from 'react-icons/io5';
import UserPhone from './UserPhone/UserPhone';
import { Box } from 'components/Box/Box';
import UserPhoto from './UserPhoto/UserPhoto';
import UserName from './UserName/UserName';
import UserEmail from './UserEmail/UserEmail';
import UserBirthday from './UserBirthday/UserBirthday';
import UserCity from './UserCity/UserCity';

const UserData = () => {
  const { isAuth } = useSelector(state => state.user);
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  // useEffect(() => {
  //   if (!isAuth) {
  //     navigate('/login');
  //   }
  // });

  return (
    <Container>
      <Title>My information:</Title>
      <UserCard>
        <UserPhoto />
        <Box mt={['32px', '32px', '0', '0']}>
          <UserInfo>
            <UserName />
            <UserEmail />
            <UserBirthday />
            <UserPhone />
            <UserCity />
          </UserInfo>
          <Box
            display="flex"
            justifyContent={['right', 'right', 'left', 'left']}
          >
            <Button style={LogoutBtn} type="button" onClick={handleLogout}>
              <IoLogOutOutline style={iconStyle} />
              Log out
            </Button>
          </Box>
        </Box>
      </UserCard>
    </Container>
  );
};

export default UserData;
