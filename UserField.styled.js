import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';
import { Field, ErrorMessage, Form } from 'formik';
import { RiPencilFill } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';
import DatePicker from 'react-datepicker';

export const FieldWrapper = styled.div`
  max-width: 379px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxxs};
  line-height: 1.33;
  color: ${theme.colors.mainText};

  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.39;
    width: 100%;
  }

  ${theme.mq.desktop} {
    margin-right: 0;
  }
`;



export const FormStyled = styled(Form)`
  max-width: 379px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-right: 13px;
  ${theme.mq.mobileOnly} {
    width: 100%;
  }

  ${theme.mq.desktop} {
    width: 100%;
    margin-right: 12px;
  }
`;

export const Title = styled.span`
  width: 88px;
  /* overflow-x: hidden; */

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }

  ${theme.mq.tablet} {
    /* width: 56px; */
    margin-right: 15px;
  }

  ${theme.mq.desktop} {
    width: 83px;
    /* margin-right: 14px; */
  }
`;

export const MyDatePickerNew = styled(DatePicker)`
  /* width: 160px; */
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;

  cursor: pointer;
  border-radius: 40px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? 'transparent' : 'rgba(245, 146, 86, 0.5)'};
  background-color: ${({ theme, disabled }) =>
    disabled ? 'transparent' : `${theme.colors.mainBackground}`};

  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.mainText};

  ::placeholder {
    color: ${({ theme }) => theme.colors.mainText};
    opacity: 1;
  }

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }

  @media (min-width: ${breakpoints[1]}px) {
    /* width: 240px; */
  }

  @media (min-width: ${breakpoints[2]}px) {
    /* width: 24px; */
  }
`;

export const Input = styled(Field)`
  /* width: 160px; */
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  margin-right: 13px;
  padding-left: 12px;
  padding-right: 12px;

  cursor: pointer;
  border-radius: 40px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? 'transparent' : 'rgba(245, 146, 86, 0.5)'};
  background-color: ${({ theme, disabled }) =>
    disabled ? 'transparent' : `${theme.colors.mainBackground}`};

  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.mainText};

  ::placeholder {
    color: ${({ theme }) => theme.colors.mainText};
    opacity: 1;
  }

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }

  @media (min-width: ${breakpoints[1]}px) {
    /* width: 216px; */
    /* height: 32px; */
    /* margin-right: 24px; */
    /* padding-left: 10px; */
  }

  @media (min-width: ${breakpoints[2]}px) {
    /* height: 32px; */
    margin-right: 11px;
  }
`;

export const Pencil = styled(RiPencilFill)`
  fill: ${theme.colors.accent};
  display: inline-block;

  @media (min-width: ${breakpoints[1]}px) {
    width: 20px;
    height: 20px;
  }
`;

export const Check = styled(AiOutlineCheck)`
  fill: ${theme.colors.accent};
  display: inline-block;

  @media (min-width: ${breakpoints[1]}px) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  bottom: -10px;
  left: 30px;
  font-size: ${theme.fontSizes.xxxs};
  color: red;
  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
`;