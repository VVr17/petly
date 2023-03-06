import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';
import { theme, breakpoints } from 'constants/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 40px 20px;

  @media (min-width: ${breakpoints[1]}px) {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const Title = styled.h2`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.l};
  line-height: 1.37;
  margin-bottom: 20px;

  @media (min-width: ${breakpoints[1]}px) {
    font-size: 36px;
  }
`;

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  min-width: 240px;
  width: 100%;
`;

export const CommentsBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
`;

export const ControlBox = styled.div`
  height: 92px;
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (min-width: ${breakpoints[1]}px) {
    height: 44px;
    display: flex;
    flex-direction: row;
    flex: grid;
    gap: 0 20px;
    width: 380px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const FieldStyled = styled(Field)`
  min-height: 100px;
  border-radius: 20px;
  padding: 10px 20px 10px 14px;
  background-color: ${theme.colors.mainBackground};
  border: 1px solid ${theme.colors.borderColor};
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.xxs};
  line-height: 19px;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export const DateBox = styled.div`
  position: relative;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  margin-top: 6px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.44;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.l};
    margin-bottom: 12px;
    margin-top: 20px;
  } ;
`;

export const LabelStyled = styled.label`
  margin-right: auto;
  margin-left: auto;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.44;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.m};
  } ;
`;

export const Span = styled.span`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xs};
  line-height: 1.37;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const InputFile = styled(Field)``;

export const ErrorData = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${theme.fontSizes.xxxxs};
  color: red;

  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxxs};
    bottom: -10px;
  }
`;
