import styled from 'styled-components';
import { Form, Field } from 'formik';
import { theme, breakpoints } from 'constants/theme';
import Plus from '../../assets/images/desktop/plus.svg';
import { useDropzone } from 'react-dropzone';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

export const FormTitle = styled.h3`
  color: ${theme.colors.mainText};
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: ${theme.fontSizes.xxl};
`;

export const Text = styled.p`
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  margin: 20px 0;
  text-align: center;
`;

export const ButtonFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonFilterItem = styled.li`
  margin-right: 15px;
  margin-bottom: 28px;
`;

export const RadioContainer = styled.ul`
  display: flex;
  gap: 90px;
`;

export const RadioItem = styled.div`
  width: 60px;
  height: 60px;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  color: ${({ isSelected }) => (isSelected ? '#F59256' : 'inherit')};
`;

export const RadioButton = styled(Field)`
  display: none;
`;

export const LoadImageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  margin-top: 12px;
  margin-bottom: 28px;
  color: ${theme.colors.mainText};
`;

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
