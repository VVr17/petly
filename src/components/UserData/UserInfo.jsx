import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/user/userSlice';

import { Formik, ErrorMessage } from 'formik';
import {
  Container,
  UserCard,
  ImageBox,
  DataBox,
  FormStyled,
  Title,
  Button,
  editBtn,
  LogoutBtn,
  UploadField,
  iconStyle,
} from './UserData.styled';
import {
  LoadImgPlus,
  LoadImgInput,
} from 'components/UploadImage/UploadImage.styled';
import Plus from '../../assets/images/desktop/plus.svg';
import { UserDataItem } from 'components/UserData/UserDataItem/UserDataItem';
import { IoLogOutOutline } from 'react-icons/io5';
import { HiCamera } from 'react-icons/hi2';
import UserPhone from './UserPhone/UserPhone';
import { Box } from 'components/Box/Box';
import UserPhoto from './UserPhoto/UserPhoto';
import UserName from './UserName/UserName';
import UserEmail from './UserEmail/UserEmail';
import UserBirthday from './UserBirthday/UserBirthday';
import UserCity from './UserCity/UserCity';

const UserInfo = () => {
  const { isAuth } = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/login');
    }
  });

  return (
    <Container>
      <Title>My information:</Title>
      <UserCard>
        <UserPhoto />
        <Box
          pl={['0px', '0px', '32px', '16px']}
          display="flex"
          flexDirection="column"
          gridGap="8px"
        >
          <UserName />
          <UserEmail />
          <UserBirthday />
          <UserPhone />
          <UserCity />
          <Button style={LogoutBtn} type="button" onClick={handleLogout}>
            <IoLogOutOutline style={iconStyle} />
            Log out
          </Button>
        </Box>
      </UserCard>
    </Container>
  );
};

export default UserInfo;
