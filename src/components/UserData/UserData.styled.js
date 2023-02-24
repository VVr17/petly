import styled from 'styled-components';
import { Form } from 'formik';
import { theme, breakpoints } from '../../constants/theme';
import { LoadImageCont } from 'components/UploadImage/UploadImage.styled';

export const Container = styled.div`
  /* padding: 0 20px; */
  width: 100%;

  @media (min-width: ${breakpoints[1]}px) {
    max-width: ${breakpoints[1]}px;
    /* padding: 0 32px; */
  }

  @media (min-width: ${breakpoints[2]}px) {
    max-width: 820px;
    /* margin-left: 0; */
    /* padding: 0; */
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  line-height: 1.35;
  color: ${theme.colors.mainText};
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xl};
  }
`;

export const UserCard = styled.div`
  /* width: 280px; */
  margin-top: 18px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 12px;

  background-color: ${theme.colors.lightText};
  background: #ffffff;
  box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
  border-radius: 20px;

  @media (min-width: ${breakpoints[1]}px) {
    width: 736px;
    margin-top: 40px;
    margin-left: -32px;
    padding: 24px 40px 24px 32px;
    border-radius: 0 40px 40px 0;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  @media (min-width: ${breakpoints[2]}px) {
    width: 410px;
    flex-direction: column;
    margin-top: 24px;
    margin-left: -16px;
    padding: 20px 16px;
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 42px;

  ${theme.mq.tablet} {
    /* padding-left: 32px; */
    /* width: 379px; */
    margin-bottom: 33px;
    margin-right: 24px;
  }

  ${theme.mq.desktop} {
    /* padding-left: 16px; */
    /* margin-left: 64px; */
  }
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
