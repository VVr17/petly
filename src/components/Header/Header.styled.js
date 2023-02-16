import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from '../../constants/theme';


export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 15px 0 15px;
    margin-top: 20px;
`;

export const Link = styled(NavLink)`
    font-family: ${theme.fontFamily.poppins};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1.5;
    color: ${theme.colors.mainText};
`;

export const Span = styled.span`
    font-family: ${theme.fontFamily.poppins};
    font-size: ${theme.fontSizes.xxl};
    font-weight: ${theme.fontWeight.bold};
    line-height: 1.5;
    color: ${theme.colors.accent};
`;