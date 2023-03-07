import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import Plus from 'assets/images/desktop/plus.svg';
import { ErrorStyle } from './UploadImage.styled';
import { Box } from 'components/Box/Box';
import {
  LoadImgLabel,
  LoadImageCont,
  ImagePreview,
  LoadImgPlus,
  LoadImgInput,
} from './UploadImage.styled';

const UploadImageField = ({ handleChange, fileDataURL, name, label, form }) => {
  const [meta] = useField(name);
  const { value } = meta;

  return (
    <LoadImgLabel form={form}>
      <Box width="100%" textAlign={form ? 'center' : 'left'}>
        {label}
        <StyledSpan>*</StyledSpan>
      </Box>
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
  label: PropTypes.string,
  form: PropTypes.string,
};

export default UploadImageField;
