import { theme } from 'constants/theme';
import styled from 'styled-components';

export const TextWrapper = styled.div`
  width: 100%;
  padding: 0 0 20px 0;
  background-color: transparent;
  box-shadow: none;

  ${theme.mq.tablet} {
    width: 618px;
    margin: 32px auto;
    padding: 60px 80px;
    background-color: ${theme.colors.cardBackground};
    border-radius: 40px;
    box-shadow: ${theme.boxShadow.second};
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
