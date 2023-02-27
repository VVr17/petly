import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';

export const ButtonContainer = styled.div`
  @media (min-width: ${breakpoints[1]}px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 56px;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: 0;
  }
`;

export const Button = styled(motion.button)`
  position: fixed;
  z-index: 3;
  bottom: 20px;
  right: 20px;
  width: 80px;
  height: 80px;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.accent};
  color: ${theme.colors.lightText};
  transition: background-color ${theme.transitionTiming};
  &:hover,
  :focus {
    background-color: ${theme.colors.hover};
  }
  @media (min-width: ${breakpoints[1]}px) {
    position: relative;
    top: 0;
    right: 0;
    height: 44px;
    width: 44px;
  }
`;

export const ButtonTitle = styled.span`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxxs};
  line-height: 1.35;
  color: ${theme.colors.lightText};
  @media (min-width: ${breakpoints[1]}px) {
    display: none;
  }
`;

export const Title = styled.p`
  display: none;
  @media (min-width: ${breakpoints[1]}px) {
    margin-right: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.m};
    line-height: 1.35;
    color: ${theme.colors.mainText};
  }
`;

export const ReactIcon = {
  width: '28px',
  height: '28px',
  fill: 'currentParent',
  background: 'currentParent',
};
