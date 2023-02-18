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

export const FormWrapper = styled.form`
position: relative;
width: 608px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
 
  } ;
`;

export const FormField = styled.input`
  width: 608px;
  height: 44px;
  padding: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  border-color: transparent;
 
  } ;
`;

export const Button = styled.button`
border: none;
position: absolute;
background-color: ${theme.colors.lightText};
bottom: 7px;
right: 15px;
cursor: pointer;
&:hover, &:focus {
    color: ${theme.colors.accent};
}
 
  } ;
`;

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 44px;
`;

export const Navigation = styled.nav`
  display: flex;
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
