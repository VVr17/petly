import { theme } from 'constants/theme';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 480px;
  padding-right: 20px;
  padding-left: 20px;

  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[1]};
    max-width: 100%;
    padding-right: ${({ theme }) => theme.space[6]};
    padding-left: ${({ theme }) => theme.space[6]};
  }

  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[2]};
    max-width: 100%;
    padding-right: ${({ theme }) => theme.space[3]};
    padding-left: ${({ theme }) => theme.space[3]};
  }
`;
