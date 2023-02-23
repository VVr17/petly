import styled from "styled-components";
import { Field, Form } from "formik";
import { theme, breakpoints } from "constants/theme";

export const Container = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.h2`
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.l};
    line-height: 1.37;
    margin-bottom: 12px;
    @media(min-width: ${breakpoints[1]}px) {
        font-size: 36px;
    }
`;

export const FormStyled = styled(Form)`
    display: flex;
    flex-direction: column;
    min-width: 240px;
    @media(min-width: ${breakpoints[1]}px) {
        min-width: 448px;
    }
`;

export const ControlBox = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    @media(min-width: ${breakpoints[1]}px) {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 380px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 40px;
    }
`;

export const FieldStyled = styled(Field)`
    margin-top: 8px;
    padding: 10px 20px 10px 14px;
    background-color: ${theme.colors.mainBackground};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 40px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.normal};
    font-size: ${theme.fontSizes.xxs};
    line-height: 19px;
    @media(min-width: ${breakpoints[1]}px) {
        margin-top: 12px;
        font-size: ${theme.fontSizes.xs};
    }
`;

export const Label = styled.label`
    margin-top: 16px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.s};
    line-height: 1.44;
    @media(min-width: ${breakpoints[1]}px) {
        font-size: ${theme.fontSizes.l};
        margin-top: 28px;
    };
`;

export const LabelStyled = styled.label`
    margin-right: auto;
    margin-left: auto;
    margin-top: 8px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.xs};
    line-height: 1.44;
    @media(min-width: ${breakpoints[1]}px) {
        margin-top: 12px;
        font-size: ${theme.fontSizes.m};
    };
`;

export const Button = styled.button`
    margin-top: 12px;
    height: 40px;
    background: #FFFFFF;
    border: 2px solid ${theme.colors.accent};
    border-radius: 40px;
    font-family: ${theme.fontFamily.manrope};
    font-style: normal;
    font-weight: ${theme.fontWeight.medium};
    font-size: ${theme.fontSizes.xs};
    line-height: 1.37;
    color: ${theme.colors.mainText};
    transition: color ${theme.transitionTiming};
    transition: background-color ${theme.transitionTiming};
    &:hover, :focus{
        background-color: ${theme.colors.accent};
        color: ${theme.colors.lightText};
    };
    @media(min-width: ${breakpoints[1]}px) {
        height: 44px;
        width: 180px;
        font-size: ${theme.fontSizes.m};
    }

`;

export const InputFile = styled(Field)`

`;
