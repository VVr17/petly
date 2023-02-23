import styled from 'styled-components';
import { theme } from 'constants/theme';
import { Field, ErrorMessage } from 'formik';

export const FieldStyle = styled(Field)`
  position: relative;
  width: 100%;
  border-radius: 40px;

  cursor: pointer;

  margin-bottom: 16px;

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

// export const ErrorStyle = styled(ErrorMessage)`
//   position: absolute;
//   transform: translate(20px, -15px);
//   font-size: ${theme.fontSizes.xxxs};
//   color: red;
//    ${theme.mq.mobileOnly} {
//     transform: translate(0px, -15px);
//   }
// `;

export const Label = styled.label`
  position: relative;
`;
export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  top: 75px;
  left: 30px;
  // transform: translate(10px, 40px);
  font-size: ${theme.fontSizes.xxxs};
  color: red;
  ${theme.mq.mobileOnly} {
    transform: translate(0px, -15px);
  }
`;

export const StyledSpan = styled.span`
  color: ${theme.colors.accent};
`;
