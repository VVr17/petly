import React from 'react';
import Plus from '../../assets/images/desktop/plus.svg';
import PropTypes from 'prop-types';
import {
  LoadImgLabel,
  LoadImageCont,
  ImagePreview,
  LoadImgPlus,
  LoadImgInput,
} from './UserUploadImg.styled';

const UserUploadImg = ({ handleChange, fileDataURL, children }) => {
  return (
    <LoadImgLabel htmlFor="upload"> {children}
      {fileDataURL ? (
        <LoadImageCont>
          <ImagePreview
            src={fileDataURL}
            alt="Preview"
            width="47px"
            height="47px"
          />
        </LoadImageCont>
      ) : (
        <>
          <LoadImageCont>
            <LoadImgPlus src={Plus} alt="upload" width="47px" height="47px" />
          </LoadImageCont>
          <LoadImgInput
            id="upload"
            name="imageFile"
            type="file"
            accept="image/*"
            onChange={handleChange}
          />
        </>
      )}
    </LoadImgLabel>
  );
};

UserUploadImg.propTypes = {
  handleChange: PropTypes.func,
  fileDataURL: PropTypes.string,
  children: PropTypes.node,
};

export default UserUploadImg;
