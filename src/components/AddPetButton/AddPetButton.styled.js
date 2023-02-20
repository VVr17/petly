import styled from 'styled-components';
import { theme, breakpoints } from '../../constants/theme';

export const Button = styled.button`
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
  }

`;

export const ButtonTitle = styled.span`
  display: inline-block;
  margin-right: 12px;
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
  `;
