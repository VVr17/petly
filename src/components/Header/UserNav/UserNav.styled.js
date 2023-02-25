import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme, breakpoints } from '../../../constants/theme';

export const Container = styled.div`
  margin-top: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: ${breakpoints[1]}px) {
    margin-top: 0;
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 10px 28px 10px 28px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxs};
  line-height: 1.35;
  color: ${theme.colors.lightText};
  background-color: ${theme.colors.accent};
  border-radius: 40px;
  transition: background-color ${theme.transitionTiming};
  &:hover,
  :focus {
    background-color: ${theme.colors.hover};
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xs};
  }
  @media (min-width: ${breakpoints[2]}px) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const iconStyle = {
  height: '24px',
  width: '24px',
  padding: '2px',
  marginRight: '14px',
  backgroundColor: theme.colors.lightText,
  fill: theme.colors.accent,
  borderRadius: '50%',
};
