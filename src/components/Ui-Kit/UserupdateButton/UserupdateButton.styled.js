import { breakpoints, theme } from 'constants/theme';
import { RiPencilFill } from 'react-icons/ri';
import styled from 'styled-components';
import { AiOutlineCheck } from 'react-icons/ai';

export const Button = styled.button`
  width: 20px;
  height: 20px;
  padding: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: inherit;
  background-color: ${theme.colors.mainBackground};

  @media (min-width: ${breakpoints[1]}px) {
    width: 32px;
    height: 32px;
  }
`;

export const Pencil = styled(RiPencilFill)`
  fill: ${theme.colors.accent};
  display: inline-block;
  width: 16px;
  height: 16px;

  @media (min-width: ${breakpoints[1]}px) {
    width: 28px;
    height: 28px;
  }
`;

export const Check = styled(AiOutlineCheck)`
  fill: ${theme.colors.accent};
  display: inline-block;
  width: 16px;
  height: 16px;

  @media (min-width: ${breakpoints[1]}px) {
    width: 28px;
    height: 28px;
  }
`;
