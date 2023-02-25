import { breakpoints, theme } from 'constants/theme';
import styled from 'styled-components';

export const FieldWrapper = styled.div`
  max-width: 379px;
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxxs};
  line-height: 1.33;
  color: ${theme.colors.mainText};

  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.39;
    width: 100%;
  }

  ${theme.mq.desktop} {
    margin-right: 0;
  }
`;
