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
    name === 'transparent' ? 'transparent' : theme.colors.accent};
  color: ${({ theme, name }) =>
    name === 'transparent' ? theme.colors.mainText : theme.colors.lightText};

  transition: color ${({ theme }) => theme.transitionTiming},
    background-color ${({ theme }) => theme.transitionTiming},
    border-color ${({ theme }) => theme.transitionTiming};

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.hover};
    border-color: ${({ theme }) => theme.colors.hover};
  }
`;
