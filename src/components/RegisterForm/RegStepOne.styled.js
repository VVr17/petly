import styled from 'styled-components';
import { theme } from 'constants/theme';

export const PasswordWrapper = styled.div`
  position: relative;
  padding: 0;
`;

export const PasswordToggle = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-65%);
  border: none;
  background: none;
  font-size: 20px;
  color: ${theme.colors.secondaryText};
  cursor: pointer;
`;
