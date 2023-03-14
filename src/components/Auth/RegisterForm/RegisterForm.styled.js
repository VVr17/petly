import styled from 'styled-components';
import { Form } from 'formik';
import { theme } from 'constants/theme';
import { NavLink } from 'react-router-dom';

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85%;
`;

export const ModalContent = styled.div`
  position: relative;
  overflow-y: auto;
  background-color: ${theme.colors.cardBackground};
  border-radius: 40px;
  padding: 60px 80px 40px 80px;
  width: 618px;

  box-shadow: ${theme.boxShadow.second};
  ${theme.mq.desktop} {
    margin-top: 0;
  }
  ${theme.mq.tabletOnly} {
    margin-top: 110px;
  }
  ${theme.mq.mobileOnly} {
    background-color: transparent;
    box-shadow: none;
    width: 100%;
    padding: 0 0 20px 0;
  }
`;

export const FormTitle = styled.h1`
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  align-items: center;
  color: ${theme.colors.mainText};
  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.l};
    line-height: 32px;
  }
`;
export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 50px;
  margin-top: 40px;
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
  color: #3091eb;
  text-decoration: none;
`;

export const ErrorMessage = styled.div`
  position: absolute;
  color: red;
  font-size: 14px;
  text-align: center;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 120px;
  ${theme.mq.mobileOnly} {
    top: 50px;
    font-size: 12px;
  }
`;
