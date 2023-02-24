import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme, breakpoints } from '../../constants/theme';

export const Button = styled(motion.button)`
  // position: relative;
  display: flex;
  color: ${theme.colors.mainText};
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  border: none;
  background-color: transparent;
  cursor: pointer;
  align-items: center;
  text-align: center;
`;

export const ButtonTitle = styled.span`
  display: inline-block;
  margin-right: 12px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  line-height: 1.35;
  color: ${theme.colors.mainText};  
`;

export const ReactIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    color: ${({ color }) => color ?? '#F59256'};
  }
  svg:hover {
    color: ${({ hoverColor }) => hoverColor ?? '#db793d'};
  }
`;
