import styled from 'styled-components';
import { Form, Field } from 'formik';
import { theme, breakpoints } from 'constants/theme';
import Plus from '../../assets/images/desktop/plus.svg';
import { useDropzone } from 'react-dropzone';

export const LoadImgLabel = styled.label`
  cursor: pointer;
`;

export const LoadImgInput = styled.input`
  cursor: pointer;
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  margin-top: 12px;
  margin-bottom: 28px;
  color: ${theme.colors.mainText};
`;

export const LoadImgPlus = styled.img`
  width: 47px;
  height: 47px;
`;

export const DropZoneWrapper = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const DropZoneInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
`;
