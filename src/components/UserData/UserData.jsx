import React from "react";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Container, UserCard, ImageBox, DataBox, FormStyled, Title, Button, LogoutBtn, UploadField, iconStyle } from "./UserData.styled";
import { LoadImageCont, LoadImgPlus, LoadImgInput } from "components/UploadImage/UploadImage.styled";
import Plus from '../../assets/images/desktop/plus.svg';
import { UserDataItem } from "components/UserData/UserDataItem/UserDataItem";
import { HiCamera } from "react-icons/hi2";
import { IoLogOutOutline } from "react-icons/io5";


export const UserData = () => {
    const [user, setUser] = useState({
      email: "nikolaj.jeliba@gmail.com",
      name: "Nick Click",
      birthday: "19.04.1998",
      city: "Odessa, Ukraine",
      phone: "+380000000000",
      photoURL: "https://res.cloudinary.com/pet-support/image/upload/v1676981263/ahrvgvc50jqweiy98x4n.jpg"});
    
    // initialValues={{ email: '', password: '' }}

    return (
        <Container>   
            <Title>My information:</Title>  
            <Formik
        initialValues={user}
        validate={values => {
            const errors = {};
            if (!values.email) {
            errors.email = 'Required';
            } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
            errors.email = 'Invalid email address';
            }
            return errors;
        }}
        >
        <UserCard>
        <FormStyled>
        <ImageBox>
        <UploadField>
            <LoadImgPlus src={Plus} alt="upload" width="47px" height="47px" />
            <LoadImgInput
            name="imageFile"
            type="file"
            accept="image/*"
          />
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
    );
};