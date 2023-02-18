import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme, breakpoints } from '../../constants/theme';

export const Container = styled.div`
    margin-top: 46px;
    display: flex;
    justify-content: center;
    @media(min-width: ${breakpoints[1]}px) {
        margin-top: 0;
    };
`;

export const Link = styled(NavLink)`
    padding: 8px 28px 8px 28px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.xxs};
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
    @media(min-width: ${breakpoints[1]}px) {
        padding: 10px 28px 10px 28px;
        font-size: ${theme.fontSizes.xs};
    };
    @media(min-width: ${breakpoints[2]}px) {
        font-size: ${theme.fontSizes.m};
    };
`;