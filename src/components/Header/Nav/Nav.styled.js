import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme, breakpoints } from '../../../constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
  @media (min-width: ${breakpoints[1]}px) {
    margin-top: 88px;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin-top: 0;
    flex-direction: row;
  } ;
`;

export const Link = styled(NavLink)`
  padding-top: ${theme.space[2]};
  padding-bottom: ${theme.space[2]};
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxl};
  line-height: 1.37;
  color: ${theme.colors.secondText};
  text-decoration: underline;
  text-decoration-color: transparent;
  transition: color ${theme.transitionTiming},
    text-decoration-color ${theme.transitionTiming};

  &.active {
    color: ${theme.colors.accent};
    text-decoration-color: ${theme.colors.accent};
  }

  &:hover,
  :focus {
    color: ${theme.colors.accent};
    text-decoration-color: ${theme.colors.accent};
  }
  &:not(:last-child) {
    margin-bottom: 40px;
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxxl};
    &:not(:last-child) {
      margin-bottom: 60px;
    }
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin-left: 80px;
    font-size: ${theme.fontSizes.m};
    line-height: 1.35;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  } ;
`;
