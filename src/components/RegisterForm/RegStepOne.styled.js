import styled from 'styled-components';
import { theme } from 'constants/theme';

export const PasswordWrapper = styled.div`
  position: relative;
  padding: 0;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  bottom: 20px;
  transform: translateY(-15%);
  border: none;
  background: none;
  font-size: 20px;
  color: ${theme.colors.secondaryText};
  cursor: pointer;
  z-index: 100;
`;
