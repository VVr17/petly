

import styled from 'styled-components';
import { theme } from 'constants/theme';
import { Field, ErrorMessage } from 'formik';


export const FieldStyle = styled(Field)`
position: relative;
width: 100%;
border-radius: 40px;
margin-bottom: 12px;
border: 1px solid rgba(245, 146, 86, 0.5);
background-color: ${theme.colors.mainBackground};
font-family: ${theme.fontFamily.manrope};
fontSizes: ${theme.fontSizes.s};
font-weight: ${theme.fontWeight.normal};
color: ${theme.colors.primaryText};

padding-left: 28px;
padding-right: 28px;
padding-top: 9px;
padding-bottom: 9px;
`;

export const ErrorStyle = styled(ErrorMessage)`
    position: absolute;
    transform:translate(16px, -11px);
    font-size: ${theme.fontSizes.xxxxs};
    color: red;
`;
