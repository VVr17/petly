import React, { useState } from "react";
import { Formik, ErrorMessage } from 'formik';
import { Container, UserCard, ImageBox, DataBox, FormStyled, Title, Button, LogoutBtn, UploadField, iconStyle } from "./UserData.styled";
import { LoadImgPlus, LoadImgInput } from "components/UploadImage/UploadImage.styled";
import Plus from '../../assets/images/desktop/plus.svg';
import { HiCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";
import { UserDataItem } from "components/UserData/UserDataItem/UserDataItem";


export const UserData = () => {
const [user, setUser] = useState({
  email: "nikolaj.jeliba@gmail.com",
  name: "Nick Click",
  birthday: "19.04.1998",
  city: "Odessa, Ukraine",
  phone: "+380000000000",
  photoURL: "https://res.cloudinary.com/pet-support/image/upload/v1676981263/ahrvgvc50jqweiy98x4n.jpg"
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
                      <Button style={LogoutBtn} type="button">
                      <IoLogOutOutline style={iconStyle}/>
                        Log out
                      </Button>
                    </DataBox>
              </FormStyled>
            </UserCard>
        </Formik>
    </Container>
)};