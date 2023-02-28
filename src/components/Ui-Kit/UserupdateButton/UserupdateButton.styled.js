import { breakpoints, theme } from 'constants/theme';
import { RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';
import { BsCheckLg } from 'react-icons/bs';

export const Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: inherit;
  background-color: ${theme.colors.mainBackground};
  color: ${theme.colors.accent};
  cursor: pointer;
  transition: background-color ${theme.transitionTiming},
    color ${theme.transitionTiming};

  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.lightText};
  }

  :disabled {
    background-color: ${theme.colors.disabled};
    color: ${theme.colors.lightText};
  }

  @media (min-width: ${breakpoints[1]}px) {
    width: 32px;
    height: 32px;
    padding: 7px;
  }
`;

export const Pencil = styled(RiPencilFill)`
  display: inline-block;
  width: 16px;
  height: 16px;

  @media (min-width: ${breakpoints[1]}px) {
    width: 20px;
    height: 20px;
  }
`;

export const Check = styled(BsCheckLg)`
  display: inline-block;
  width: 16px;
  height: 16px;

  @media (min-width: ${breakpoints[1]}px) {
    width: 20px;
    height: 20px;
  }
`;
