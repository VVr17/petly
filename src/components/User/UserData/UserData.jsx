import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { logout } from 'redux/user/userSlice';
import { IoLogOutOutline } from 'react-icons/io5';
import { Box } from 'components/Box/Box';
import {
  UserPhoto,
  UserName,
  UserEmail,
  UserBirthday,
  UserPhone,
  UserCity,
} from './UserDataItem/index';
import {
  Container,
  UserCard,
  Title,
  Button,
  LogoutBtn,
  iconStyle,
  UserInfo,
} from './UserData.styled';

const UserData = () => {
  const dispatch = useDispatch();
  const [isUpdating, setIsUpdating] = useState(false);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Container>
      <Title>
        <FormattedMessage id="myInfo" />:
      </Title>
      <UserCard>
        <UserPhoto />
        <Box mt={['32px', '32px', '0', '0']}>
          <UserInfo>
            <UserName isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
            <UserEmail isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
            <UserBirthday
              isUpdating={isUpdating}
              setIsUpdating={setIsUpdating}
            />
            <UserPhone isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
            <UserCity isUpdating={isUpdating} setIsUpdating={setIsUpdating} />
          </UserInfo>
          <Box
            display="flex"
            justifyContent={['right', 'right', 'left', 'left']}
          >
            <Button style={LogoutBtn} type="button" onClick={handleLogout}>
              <IoLogOutOutline style={iconStyle} />
              <FormattedMessage id="logOut" />
            </Button>
          </Box>
        </Box>
      </UserCard>
    </Container>
  );
};

export default UserData;
