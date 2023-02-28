import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';
import { Field, ErrorMessage } from 'formik';

export const FieldStyle = styled(Field)`
  width: 100%;
  border-radius: 40px;
  cursor: pointer;
  margin-bottom: 8px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  background-color: ${theme.colors.mainBackground};
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.primaryText};
  padding-left: 28px;
  padding-right: 28px;
  padding-top: 9px;
  padding-bottom: 9px;
  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxs};
    padding: 12px 14px;
  }
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  ${theme.mq.mobileOnly} {
    margin-bottom: 8px;
  }
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.44;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.l};
    line-height: 1.08;
    margin-top: 12px;
  } ;
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -3px;
  font-size: ${theme.fontSizes.xxxs};
  color: red;
  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxxs};
    bottom: -10px;
  }
`;

export const StyledSpan = styled.span`
  color: ${theme.colors.accent};
`;
export const FieldWrapper = styled.div`
  position: relative;
`;
