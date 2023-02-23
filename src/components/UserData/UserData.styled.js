import styled from 'styled-components';
import { Form } from 'formik';
import { theme, breakpoints } from '../../constants/theme';
import { LoadImageCont } from 'components/UploadImage/UploadImage.styled';

export const Container = styled.div`
  padding: 0 20px;

  @media(min-width: ${breakpoints[1]}px) {
    max-width: ${breakpoints[1]}px;
    padding: 0 32px;
  ;
  @media(min-width: ${breakpoints[2]}px) {
    max-width: 820px;
    margin-left: 0;
    padding: 0;
  ;
`;

export const Title = styled.h2`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  line-height: 1.35;
  color: ${theme.colors.mainText};
  @media(min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xl}
  ;
`;

export const UserCard = styled.div`
  width: 280px;
  margin-top 18px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 12px;

  background-color: ${theme.colors.lightText};
  background: #FFFFFF;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media(min-width: ${breakpoints[1]}px) {
    width: 736px;
    margin-top: 40px;
    margin-left: -32px;
    padding: 24px 0;
    border-radius: 0 40px 40px 0;
    }
   @media(min-width: ${breakpoints[2]}px) {
      width: 410px;
      margin-top: 24px;
      margin-left: -16px;
      padding: 20px 16px;
   }
`;

export const FormStyled = styled(Form)`
  @media (min-width: ${breakpoints[1]}px) {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
  }
  @media (min-width: ${breakpoints[2]}px) {
    flex-direction: column;
  }
`;

export const ImageBox = styled.div`
  position: relative;
  padding: 0 12px 32px 12px;

  @media (min-width: ${breakpoints[1]}px) {
    margin-right: 40px;
    padding: 0;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin: 0 auto;

    & button {
      position: absolute;
      right: -74px;
      bottom: 0;
    }
  }
`;

export const UploadField = styled(LoadImageCont)`
  width: 233px;
  height: 233px;
  border-radius: 50%;

  @media (min-width: ${breakpoints[1]}px) {
    margin: 0 0 8px;
  }

  @media (min-width: ${breakpoints[2]}px) {
    margin: 0;
  }
`;

export const DataBox = styled.div`
  @media (min-width: ${breakpoints[1]}px) {
    margin-top: 40px;
    margin-right: 52px;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin-top: 32px;
    margin-right: 0;
  }
`;

export const Text = styled.p`
  margin-left: auto;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  line-height: 1.35;
  color: ${theme.colors.mainText};
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-left: auto;
  margin-right: 12px;
  padding: 0;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const iconStyle = {
  height: '20px',
  width: '20px',
  fill: theme.colors.accent,
  color: theme.colors.accent,
};

export const editBtn = {
  gap: '4px',
  marginLeft: 'auto',
};

export const LogoutBtn = {
  fontSize: '16px',
  opacity: 0.6,
  marginLeft: 0,
};
