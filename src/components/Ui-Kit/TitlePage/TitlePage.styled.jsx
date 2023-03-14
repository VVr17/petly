import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Title = styled.h1`
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  color: ${theme.colors.mainText};
  text-align: center;
  margin-bottom: 28px;

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.xxxl};
    margin-bottom: 40px;
  }
`;
