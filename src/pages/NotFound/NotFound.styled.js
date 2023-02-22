import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Number = styled.p`
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: 100px;
  line-height: 100px;
  color: ${({ theme }) => theme.colors.accent};
  margin-bottom: ${({ theme }) => theme.space[4]};

  ${theme.mq.tablet} {
    font-size: 200px;
    line-height: 200px;
  }
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  text-align: center;

  ${theme.mq.tablet} {
    font-size: 32px;
  }
`;
