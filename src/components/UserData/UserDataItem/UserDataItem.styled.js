import styled from "styled-components";
import { theme, breakpoints } from '../../../constants/theme';
import { Field, ErrorMessage } from 'formik';
import { RiPencilFill } from "react-icons/ri";

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 8px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxxs};
  line-height: 1.33;
  color: ${theme.colors.mainText};

  @media(min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.39;
    width: 100%;
    margin-right: 30px;
  }

  &:last-of-type  {
    margin-bottom: 40px;

    @media(min-width: ${breakpoints[1]}px) {
      margin-bottom: 30px;
    }

    @media(min-width: ${breakpoints[1]}px) {
      margin-bottom: 24px;
    }
  }
`

export const Input = styled(Field)`
  width: 160px;
  height: 24px;
  margin-right: 13px;
  margin-left: auto;
  padding-left: 15px;

  cursor: pointer;
  border-radius: 40px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.mainText};

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }

  @media(min-width: ${breakpoints[1]}px) {
    width: 216px;
    height: 32px;
    margin-right: 24px;
    padding-left: 10px;
  }
`

export const Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 3px;
  border-radius: 50%;
  border: inherit;
  background-color: ${theme.colors.mainBackground};

  @media(min-width: ${breakpoints[1]}px) {
    width: 32px;
    height: 32px;
  }
`

export const Pencil = styled(RiPencilFill)`
  fill: ${theme.colors.accent};
  display: inline-block;

  @media(min-width: ${breakpoints[1]}px) {
  width: 20px;
  height: 20px;
  }
`