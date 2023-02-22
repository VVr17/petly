import styled from 'styled-components';
import { Form } from 'formik';
import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: ${theme.colors.cardBackground};
  border-radius: 40px;
  padding: 60px 80px 40px 80px;
  width: 618px;
  max-height: 605px;
  box-shadow: ${theme.boxShadow.second};
`;

export const FormTitle = styled.h1`
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  align-items: center;
  color: ${theme.colors.mainText};
`;
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-bottom: 40px;
  gap: 30px;
`;

export const ButtonWrapper = styled.div`
  display:flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const Paragraph = styled.p`
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.xxxs};
  line-height: 16px;
  align-items: center;
  text-align: center;
  color: ${theme.colors.secondaryText};
`;

export const LoginLink = styled(NavLink)`
  color: #3091EB;
  text-decoration: none;
`;

