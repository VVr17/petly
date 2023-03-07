import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';
import { theme, breakpoints } from 'constants/theme';
import Plus from '../../../../assets/images/desktop/plus.svg';
import { useDropzone } from 'react-dropzone';
import MyDatePicker from './StepOne/DatePicker';
import { motion } from 'framer-motion';

// header of form
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
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

  ${theme.mq.mobileOnly} {
    max-width: 290px;
  }
`;

// container of buttons
export const ButtonsContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;

  @media (min-width: ${breakpoints[1]}px) {
    flex-direction: row;
    /* width: 380px; */
    margin-left: auto;
    margin-right: auto;
  }
`;
// choose field
export const ButtonFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  ${theme.mq.mobileOnly} {
    max-width: 290px;
  }

  @media (min-width: ${breakpoints[1]}px) {
    margin-bottom: 8px;
  } ;
`;

export const ButtonFilterItem = styled.li`
  margin-right: 15px;
  margin-bottom: 12px;
  @media (min-width: ${breakpoints[1]}px) {
    margin-bottom: 0;
  }
`;

export const ButtonFilterLabel = styled(motion.label)`
  display: block;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  width: ${({ theme, width }) => (width ? width : 'auto')};
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, name, selected }) =>
    name === 'filled' || selected ? theme.colors.accent : 'transparent'};

  color: ${({ theme, name, selected }) => {
    switch (name) {
      case 'transparent':
        return theme.colors.mainText;
      case 'filled':
        return theme.colors.lightText;
      case 'learnMore':
        return theme.colors.accent;
      case 'filter':
        return selected ? theme.colors.lightText : theme.colors.mainText;
      default:
        return theme.colors.lightText;
    }
  }};

  transition: color ${({ theme }) => theme.transitionTiming},
    background-color ${({ theme }) => theme.transitionTiming},
    border-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${({ theme, name }) =>
      name === 'learnMore' ? 'transparent' : theme.colors.hover};
    border-color: ${({ theme, name }) =>
      name === 'learnMore' ? theme.colors.secondaryHover : theme.colors.hover};
    color: ${({ theme, name }) =>
      name === 'learnMore'
        ? theme.colors.secondaryHover
        : theme.colors.lightText};
  }
`;

export const ButtonFilterInput = styled(Field)`
  display: none;
  // margin-right: 15px;
  // margin-bottom: 28px;
`;
// end choose field

// styles for datePicker
export const DatePickerContainer = styled.div`
  position: relative;
`;

export const DatePickerInput = styled.input`
  width: 100%;
  border-radius: 40px;

  cursor: pointer;

  margin-bottom: 10px;

  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.primaryText};

  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxs};
    padding: 12px 14px;
  }
`;
// end of styles for datePicker

// sex field
export const RadioContainer = styled.ul`
  display: flex;
  gap: 90px;
  margin-top: 10px;
  margin-bottom: 18px;

  @media (min-width: ${breakpoints[1]}px) {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;

export const RadioTitle = styled.p`
  margin-top: 20px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.44;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.l};
    line-height: 1.08;
    margin-top: 40px;
  }
`;

export const RadioItem = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 14px;
  @media (min-width: ${breakpoints[1]}px) {
    width: 60px;
    height: 60px;
    margin-bottom: 23px;
  }
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.44;
  color: ${({ isSelected }) => (isSelected ? '#F59256' : 'inherit')};
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.m};
    line-height: 1.25;
  }
`;

export const RadioButton = styled(Field)`
  display: none;
`;
// end sex field

// price and image error
export const CustomCont = styled.div`
  position: relative;
`;
export const ErrorMess = styled.div`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: 8px;
  color: red;
  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
`;
// end price error

export const LoadImageCont = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
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
  display: none;
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

// comments field
export const TextareaContainer = styled.label`
  position: relative;
`;

export const TextareaLabel = styled.label`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.44;
  margin-bottom: 8px;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.l};
    line-height: 1.08;
    display: block;
    margin-bottom: 12px;
  }
`;

export const Textarea = styled(Field)`
  width: 100%;
  height: ${({ form }) => (form === 'userPet' ? '100px' : '40px')};
  border-radius: ${({ form }) => (form === 'userPet' ? '20px' : '40px')};
  margin-top: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xxs};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.primaryText};
  padding-left: 14px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media (min-width: ${breakpoints[1]}px) {
    height: 116px;
    border-radius: 20px;
    margin-top: 12px;
    padding-left: 18px;
    padding-right: 18px;
    font-size: ${theme.fontSizes.s};
  } ;
`;
// end of comments section

// common error
export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${theme.fontSizes.xxxxs};
  color: red;

  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxxs};
    bottom: -10px;
  }
`;
