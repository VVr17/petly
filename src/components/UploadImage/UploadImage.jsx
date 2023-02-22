import React, { useState } from 'react';
import { Field } from 'formik';
import PropTypes from 'prop-types';
import {
  DropZoneWrapper,
  DropZoneInput,
  ImagePreview,
  LoadImgPlus,
} from './UploadImage.styled';
import { useDropzone } from 'react-dropzone';
import Plus from '../../assets/images/desktop/plus.svg';

const ImageField = ({ name }) => {
  const [image, setImage] = useState(null);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    multiple: false,
    onDrop: ([file]) => {
      setImage(URL.createObjectURL(file));
    },
  });

  return (
    <>
      {image ? (
        <ImagePreview src={image} alt="Preview" />
      ) : (
        <Field name={name}>
          {({ field, form }) => (
            <DropZoneWrapper {...getRootProps()}>
              <LoadImgPlus src={Plus} alt="upload" width="47px" height="47px" />
              <DropZoneInput {...getInputProps()} />
            </DropZoneWrapper>
          )}
        </Field>
      )}
    </>
  );
};

ImageField.propTypes = {
  name: PropTypes.string,
};

export default ImageField;
