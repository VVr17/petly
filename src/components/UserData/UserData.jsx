import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/user/userSlice';

import { Formik, ErrorMessage } from 'formik';

import Plus from '../../assets/images/desktop/plus.svg';
import { UserDataItem } from "components/UserData/UserDataItem/UserDataItem";
import { LoadImgPlus, LoadImgInput } from "components/UploadImage/UploadImage.styled";
import { Container, UserCard, ImageBox, DataBox, FormStyled, Title, Button, LogoutBtn, UploadField, iconStyle } from "./UserData.styled";
import { IoLogOutOutline } from "react-icons/io5";
import { HiCamera } from "react-icons/hi2";


export const UserData = () => {
const { isAuth } = useSelector(state => state.user);
const dispatch = useDispatch();
const navigate = useNavigate();

const [user, setUser] = useState({
  email: "nikolaj.jeliba@gmail.com",
  name: "Nick Click",
  birthday: "19.04.1998",
  city: "Odessa, Ukraine",
  phone: "+380000000000",
  photoURL: "https://res.cloudinary.com/pet-support/image/upload/v1676981263/ahrvgvc50jqweiy98x4n.jpg"
});

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
        <Formik initialValues={user}>
            <UserCard>
              <FormStyled>
                    <ImageBox>
                      <UploadField>
                        <LoadImgPlus src={Plus} alt="upload" width="47px" height="47px" />
                        <LoadImgInput
                        name="imageFile"
                        type="file"
                        accept="image/*"/>
                      </UploadField>
                        <Button type="button">
                        <HiCamera style={iconStyle}/>
                        Edit photo
                        </Button>
                      </ImageBox>
                    <DataBox>
                      <UserDataItem />
                      <Button style={LogoutBtn} type="button" onClick={handleLogout}>
                      <IoLogOutOutline style={iconStyle}/>
                        Log out
                      </Button>
                    </DataBox>
              </FormStyled>
            </UserCard>
        </Formik>
    </Container>
)};