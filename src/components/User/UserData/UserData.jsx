import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserState } from 'redux/user/userSelectors';
import { logout } from 'redux/user/userSlice';
import { IoLogOutOutline } from 'react-icons/io5';
import { Box } from 'components/Box/Box';
import {
  Container,
  UserCard,
  Title,
  Button,
  LogoutBtn,
  iconStyle,
  UserInfo,
} from './UserData.styled';
import {
  UserPhoto,
  UserName,
  UserEmail,
  UserBirthday,
  UserPhone,
  UserCity,
} from './UserDataItem/index';

const UserData = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

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
