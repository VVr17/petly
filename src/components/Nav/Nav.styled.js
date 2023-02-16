import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from '../../constants/theme';

export const Container = styled.div`

`;

export const Link = styled(NavLink)`
   margin-left: 80px;
   font-family: ${theme.fontFamily.manrope};
   font-style: normal;
   font-weight: ${theme.fontWeight.medium};
   font-size: ${theme.fontSizes.m};
   line-height: 1.35;
   color: ${theme.colors.secondText};
   &:hover, :focus {
    color: ${theme.colors.accent};
   };
`;