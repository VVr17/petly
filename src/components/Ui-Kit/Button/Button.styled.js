import { motion } from 'framer-motion';
import styled from 'styled-components';
import { breakpoints } from 'constants/theme';

export const ButtonStyled = styled(motion.button)`
  height: 40px;
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
  margin-bottom: ${({ name }) => name === 'contacts' && '12px'};

  background-color: ${({ theme, name, selected }) => {
    switch (name) {
      case 'filter':
        return selected ? theme.colors.accent : 'transparent';
      case 'filled':
        return theme.colors.accent;
      case 'contacts':
        return theme.colors.accent;
      default:
        return 'transparent';
    }
  }};
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
      case 'addToFavorite':
        return theme.colors.mainText;
      default:
        return theme.colors.lightText;
    }
  }};

  transition: color ${({ theme }) => theme.transitionTiming},
    background-color ${({ theme }) => theme.transitionTiming},
    border-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.colors.hover};
    background-color: ${({ theme }) => theme.colors.hover};
    color: ${({ theme, name }) =>
      name === 'learnMore' || 'filter'
        ? theme.colors.lightText
        : theme.colors.secondaryHover};
  }

  @media (min-width: ${breakpoints[1]}px) {
    margin-left: ${({ name }) => name === 'contacts' && '12px'};
    margin-bottom: ${({ name }) => name === 'contacts' && '0px'};
  }

  svg {
    width: 20px;
    height: 20px;
    margin-right: ${({ theme }) => theme.space[2]};
  }
`;
