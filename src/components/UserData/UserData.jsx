import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/user/userSlice';
import { Container, UserCard, Title, Button, LogoutBtn, iconStyle, UserInfo } from './UserData.styled';
import { IoLogOutOutline } from 'react-icons/io5';
import { Box } from 'components/Box/Box';
import UserPhoto from './UserDataItem/UserPhoto/UserPhoto';
import UserName from './UserDataItem/UserName/UserName';
import UserEmail from './UserDataItem/UserEmail/UserEmail';
import UserBirthday from './UserDataItem/UserBirthday/UserBirthday';
import UserPhone from './UserDataItem/UserPhone/UserPhone';
import UserCity from './UserDataItem/UserCity/UserCity';

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
