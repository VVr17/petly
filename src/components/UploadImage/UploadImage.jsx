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
import { ErrorStyle } from './UploadImage.styled';
import { useField } from 'formik';

const UploadImageField = ({ handleChange, fileDataURL, name }) => {
  const [field, meta, helpers] = useField(name);
  const { value } = meta;

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
            <ErrorStyle name={name} component="div" />
          </LoadImageCont>
          <LoadImgInput
            // {...field}
            selected={value}
            name={name}
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
  name: PropTypes.string,
};

export default UploadImageField;
