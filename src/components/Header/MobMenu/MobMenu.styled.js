import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Modal = styled(motion.div)`
  z-index: 99;
  width: 100vw;
  height: 100vh;
  top: 0px;
  left: 0px;
  position: fixed;
  background-color: ${theme.colors.mainBackground};

  ${theme.mq.tablet} {
    width: 70%;
  }
  ${theme.mq.desktop} {
    display: none;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${theme.space[5]} ${theme.space[6]} 0 ${theme.space[6]};
`;

export const AuthBox = styled.div`
  @media (min-width: ${breakpoints[1]}px) {
    display: none;
  }
`;

export const Link = styled(NavLink)`
  font-family: ${theme.fontFamily.poppins};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.mainText};
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  } ;
`;

export const Span = styled.span`
  font-family: ${theme.fontFamily.poppins};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.accent};
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  } ;
`;

export const Button = styled.button`
  width: 48px;
  height: 48px;
  padding: 0 0 0 0;
  border: none;
  outline: none;
  border-radius: 50%;
  background-color: ${theme.colors.mainBackground};
  cursor: pointer;
  transition: color ${theme.transitionTiming};

  :hover {
    color: ${theme.colors.accent};
  }
`;

export const iconStyle = {
  height: '24px',
  width: '24px',
  backgroundColor: 'inherit',
  color: 'inherit',
};
