import React from 'react';
import { HiCamera } from 'react-icons/hi2';
import {
  Button,
  editBtn,
  iconStyle,
  ImageBox,
  LoadImgInput,
  LoadImgPlus,
  UploadField,
} from './UserPhoto.styled';
import Plus from '../../../assets/images/desktop/plus.svg';

const UserPhoto = () => {
  return (
    <ImageBox>
      <UploadField>
        <LoadImgPlus src={Plus} alt="upload" width="47px" height="47px" />
        <LoadImgInput name="imageFile" type="file" accept="image/*" />
      </UploadField>
      <Button style={editBtn} type="button">
        <HiCamera style={iconStyle} />
        Edit photo
      </Button>
    </ImageBox>
  );
};

export default UserPhoto;
