import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';

export const Container = styled.div`
  width: 100%;
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
  margin-top: 18px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 16px;

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

  ${theme.mq.tabletOnly} {
    margin-bottom: 33px;
    margin-right: 52px;
  }

  ${theme.mq.desktop} {
    padding-left: 8px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-left: auto;
  margin-right: 12px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 15px;
  border-radius: 15px;
  color: ${theme.colors.logoutColor};
  transition: background-color ${theme.transitionTiming},
    color ${theme.transitionTiming};

  svg {
    transition: color ${theme.transitionTiming};
    color: ${theme.colors.accent};
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.lightText};

    svg {
      color: ${theme.colors.lightText};
    }
  }
`;

export const iconStyle = {
  height: '20px',
  width: '20px',
};

export const LogoutBtn = {
  fontSize: '16px',
  marginLeft: 0,
};
