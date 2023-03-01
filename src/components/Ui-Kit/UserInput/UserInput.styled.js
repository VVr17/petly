import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';
import { Field, ErrorMessage } from 'formik';

export const Label = styled.label`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  margin-right: 13px;
`;

export const Title = styled.span`
  min-width: 56px;
  margin-right: 8px;

  ${theme.mq.tablet} {
    min-width: 83px;
    margin-right: 24px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;

  /* cursor: pointer; */
  border-radius: 40px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? 'transparent' : 'rgba(245, 146, 86, 0.5)'};
  background-color: ${({ theme, disabled }) =>
    disabled ? 'transparent' : `${theme.colors.mainBackground}`};

  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.mainText};

  ::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.mainText : theme.colors.secondaryText};
    opacity: 1;
  }

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  left: 0;
  bottom: -11px;
  font-size: ${theme.fontSizes.xxxxs};
  color: red;
  max-height: 14px;
  overflow-y: hidden;

  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xxxs};
    /* bottom: -10px; */
  }
`;
