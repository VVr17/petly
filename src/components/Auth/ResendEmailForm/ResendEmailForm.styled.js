import { theme } from 'constants/theme';
import { Form } from 'formik';
import styled from 'styled-components';

export const FormContainerStyled = styled.div`
  width: 100%;
  padding: 60px 20px 40px 20px;

  ${theme.mq.tablet} {
    width: 500px;
  }
`;

export const MessageStyled = styled.p`
  margin-bottom: 24px;
  text-align: center;
  color: ${theme.colors.mainText};
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: ${theme.fontSizes.m};
`;

export const FormStyled = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  top: -12px;
  left: 50%;
  color: red;
  font-size: 12px;
  text-align: center;
  width: 100%;
  transform: translateX(-50%);

  ${theme.mq.tablet} {
    font-size: 14px;
  }
`;
