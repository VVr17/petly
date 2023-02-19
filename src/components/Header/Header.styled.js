import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme, breakpoints } from '../../constants/theme';

export const Container = styled.div`
  display: block;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: ${theme.space[3]} ${theme.space[4]} 0 ${theme.space[4]};
  @media(min-width: ${breakpoints[1]}px) {
    padding: ${theme.space[5]} ${theme.space[6]} 0 ${theme.space[6]};  
  }
  @media(min-width: ${breakpoints[2]}px) {
    padding: ${theme.space[4]} ${theme.space[3]} 0 ${theme.space[3]};
  }
`;

export const Navigation = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PagesBox = styled.div`
  @media(max-width: ${breakpoints[2]-1}px) {
    display: none;
  };
`;

export const AuthBox = styled.div`
  display: none;
  @media(min-width: ${breakpoints[1]}px) {
    display: block;
    margin-left: auto;
  };
`;

export const MenuBox = styled.div`
  display: block;
  margin-left: auto;
  @media(min-width: ${breakpoints[1]}px) {
    margin-left: ${theme.space[4]};
  }
  @media(min-width: ${breakpoints[2]}px) {
    display: none;
  };
`;

export const Link = styled(NavLink)`
  font-family: ${theme.fontFamily.poppins};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.mainText};
  @media(min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl}; 
  };
`;

export const Span = styled.span`
  font-family: ${theme.fontFamily.poppins};
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.5;
  color: ${theme.colors.accent};
  @media(min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxl};
  };
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none; 
  outline: none;
  background-color: ${theme.colors.mainBackground};
  padding: 5px 0 5px 0;
`;

export const iconStyle = {
  height: '30px',
  width: '40px',
  backgroundColor: theme.colors.mainBackground,
  fill: theme.colors.mainText,
};
