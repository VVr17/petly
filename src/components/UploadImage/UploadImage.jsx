import React from 'react';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import {
  LoadImgLabel,
  LoadImageCont,
  ImagePreview,
  LoadImgPlus,
  LoadImgInput,
} from './UploadImage.styled';
import Plus from '../../assets/images/desktop/plus.svg';
import PropTypes from 'prop-types';

const UploadImageField = ({ handleChange, fileDataURL }) => {
  return (
    <LoadImgLabel>
      Load the pet’s image:<StyledSpan>*</StyledSpan>
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

UploadImageField.propTypes = {
  handleChange: PropTypes.func,
  fileDataURL: PropTypes.string,
};

export default UploadImageField;
