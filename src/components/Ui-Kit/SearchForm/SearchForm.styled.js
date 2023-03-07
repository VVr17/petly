import styled from 'styled-components';
import {
  AiOutlineSearch as StyledAiOutlineSearch,
  AiOutlineCloseCircle as StyledAiOutlineCloseCircle,
} from 'react-icons/ai';
import { theme } from 'constants/theme';

export const FormWrapper = styled.form`
  position: relative;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;

  ${theme.mq.tablet} {
    width: 608px;
  }
`;

export const FormField = styled.input`
  width: 100%;
  height: 40px;
  padding: 9px 36px 9px 12px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  border-color: transparent;
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xs};
  font-weight: ${theme.fontWeight.medium};
  line-height: 1.37;
  color: ${theme.colors.primaryText};

  ${theme.mq.tablet} {
    height: 44px;
    font-size: ${theme.fontSizes.m};
    padding: 8px 36px 9px 20px;
  }
`;

export const Button = styled.button`
  border: none;
  position: absolute;
  background-color: ${theme.colors.lightText};
  bottom: 6px;
  right: 12px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }
`;

export const AiOutlineSearch = styled(StyledAiOutlineSearch)`
  font-size: 20px;

  ${theme.mq.tablet} {
    font-size: 24px;
  }
`;

export const AiOutlineCloseCircle = styled(StyledAiOutlineCloseCircle)`
  font-size: 20px;

  ${theme.mq.tablet} {
    font-size: 24px;
  }
`;
