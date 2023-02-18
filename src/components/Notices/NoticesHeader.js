import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// import { Formik, Field, Form } from 'formik';
import { theme, breakpoints } from '../../constants/theme';

export const Container = styled.div`
  text-align: center;
  padding-top: 70px;
  padding-bottom: 60px;
  background-color: ${theme.colors.mainBackground};
  (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  }
`;

export const Title = styled.h1`
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xxxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.4;
  color: ${theme.colors.mainText};
  text-align: center;
  margin-bottom: 40px;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  } ;
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 44px;
  margin-top: 50px;
`;

export const NavDiv = styled.div`
  display: flex;
`;

export const Navigation = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li``;

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
