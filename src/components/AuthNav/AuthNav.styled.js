import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from '../../constants/theme';

export const Container = styled.div`
    margin-left: 500px;
`;

export const Link = styled(NavLink)`
    padding: 10px 28px 10px 28px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.m};
    line-height: 1.35;
    color: ${theme.colors.mainText};
    border: 2px solid ${theme.colors.accent};
    border-radius: 40px;
    &:not(:last-child) {
        margin-right: 20px;
    };
    &:hover, :focus {
        background-color: ${theme.colors.accent};
        color: ${theme.colors.lightText};
    };
`;