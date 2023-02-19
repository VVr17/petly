import styled from 'styled-components';

export const ButtonStyled = styled.button`
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
  background-color: ${({ theme, name }) =>
    name === 'filled' ? theme.colors.accent : 'transparent'};
  color: ${({ theme, name }) => {
    switch (name) {
      case 'transparent':
        return theme.colors.mainText;
      case 'filled':
        return theme.colors.lightText;
      case 'learnMore':
        return theme.colors.accent;
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
