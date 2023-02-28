import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme, breakpoints } from '../../constants/theme';
import { motion } from 'framer-motion';

export const HeaderStyled = styled(motion.header)`
  padding-top: ${theme.space[3]};
  @media (min-width: ${breakpoints[1]}px) {
    padding-top: ${theme.space[5]};
  }
  @media (min-width: ${breakpoints[2]}px) {
    padding-top: ${theme.space[4]};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagesBox = styled.div`
  @media (max-width: ${breakpoints[2] - 1}px) {
    display: none;
  } ;
`;

export const AuthBox = styled.div`
  display: none;
  @media (min-width: ${breakpoints[1]}px) {
    display: block;
    margin-left: auto;
  } ;
`;

export const MenuBox = styled.div`
  display: block;
  margin-left: auto;
  @media (min-width: ${breakpoints[1]}px) {
    margin-left: ${theme.space[4]};
  }
  @media (min-width: ${breakpoints[2]}px) {
    display: none;
  } ;
`;

export const LogoTitle = styled.div`
  transition: color ${theme.transitionTiming};
`;

export const Span = styled.span`
  font-family: ${theme.fontFamily.poppins};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.accent};
  transition: color ${theme.transitionTiming};
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  } ;
`;

export const Link = styled(NavLink)`
  font-family: ${theme.fontFamily.poppins};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.mainText};
  &:hover ${LogoTitle} {
    color: ${theme.colors.accent};
  }
  &:hover ${Span} {
    color: ${theme.colors.mainText};
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  } ;
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  outline: none;
  background-color: ${theme.colors.mainBackground};
  padding: 5px 0 5px 0;
  cursor: pointer;
`;

export const iconStyle = {
  height: '30px',
  width: '40px',
  backgroundColor: theme.colors.mainBackground,
  fill: theme.colors.mainText,
};

export const WrapSelector = styled.div`
  display: flex;
  flex: 1;
  padding-right: 20px;
  justify-content: flex-end;
  gap: 8px;
`;

export const BtnFlag = styled.button`
  padding: 0;
  width: 30px;
  height: 20px;
  border-radius: 4px;
  overflow: hidden;
  border: 0;
  cursor: pointer;

  ${theme.mq.tablet} {
    width: 60px;
    height: 40px;
    border-radius: 8px;
  }
`;
