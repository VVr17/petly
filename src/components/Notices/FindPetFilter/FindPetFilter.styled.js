import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'constants/theme';

export const Navigation = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Navlink = styled(NavLink)`
  color: ${theme.colors.mainText};
  border: 2px solid ${theme.colors.accent};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.m};
  font-weight: ${theme.fontWeight.medium};
  margin-right: 12px;
  padding: 10px 28px;
  border-radius: 40px;
  background-color: ${theme.colors.lightText};
  &.active {
    color: ${theme.colors.lightText};
    background-color: ${theme.colors.accent};
  }
  &:hover:not(.active),
  &:focus:not(.active) {
    background-color: ${theme.colors.hover};
    border: 2px solid ${theme.colors.hover};
  }
`;
