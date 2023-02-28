import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';
import { motion } from 'framer-motion';

export const Container = styled.div`
  margin-top: 20px;
  box-sizing: border-box;
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${breakpoints[1]}px) {
    max-width: ${breakpoints[1]}px;
  }
  @media (min-width: ${breakpoints[2]}px) {
    max-width: 820px;
    margin-top: 0px;
    margin-left: 32px;
    padding: 0 0 0 0;
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: ${breakpoints[2]}px) {
    min-width: 805px;
  }
`;

export const Title = styled.h2`
  margin-right: auto;
  margin-bottom: 16px;
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

export const List = styled.ul`
  list-style-type: none;
`;

export const ImageBox = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
`;

export const iconStyle = {
  height: '20px',
  width: '20px',
  fill: theme.colors.lightText,
};

export const Button = styled(motion.button)`
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
