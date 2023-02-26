import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';
import { Field, ErrorMessage } from 'formik';
import { RiPencilFill } from 'react-icons/ri';
import { BsCheckLg } from 'react-icons/bs';

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 13px;
`;

export const Title = styled.span`
  width: 56px;
  /* width: 85px; */
  margin-right: 26px;
  /* overflow-x: hidden; */

  ${theme.mq.tablet} {
    width: 90px;
    margin-right: 36px;
  }

  ${theme.mq.desktop} {
    width: 83px;
    margin-right: 24px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;

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
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.mainText : theme.colors.secondaryText};
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
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  bottom: -10px;
  left: 0px;
  font-size: 8px;
  color: red;
  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
`;
