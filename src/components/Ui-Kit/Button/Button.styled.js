import { motion } from 'framer-motion';
import styled from 'styled-components';

export const ButtonStyled = styled(motion.button)`
  display: block;
  border: none;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  cursor: pointer;
  width: ${({ theme, width }) => (width ? width : 'auto')};
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  border-radius: 40px;
  border: 2px solid ${({ theme }) => theme.colors.accent};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, name, selected }) =>
    name === 'filled' || selected ? theme.colors.accent : 'transparent'};

  color: ${({ theme, name, selected }) => {
    switch (name) {
      case 'transparent':
        return theme.colors.mainText;
      case 'filled':
        return theme.colors.lightText;
      case 'learnMore':
        return theme.colors.accent;
      case 'filter':
        return selected ? theme.colors.lightText : theme.colors.mainText;
      default:
        return theme.colors.lightText;
    }
  }};

  transition: color ${({ theme }) => theme.transitionTiming},
    background-color ${({ theme }) => theme.transitionTiming},
    border-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${({ theme, name }) =>
      name === 'learnMore' ? 'transparent' : theme.colors.hover};
    border-color: ${({ theme, name }) =>
      name === 'learnMore' ? theme.colors.secondaryHover : theme.colors.hover};
    color: ${({ theme, name }) =>
      name === 'learnMore'
        ? theme.colors.secondaryHover
        : theme.colors.lightText};
  }
`;
