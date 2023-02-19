import { theme } from 'constants/theme';
import styled from 'styled-components';

export const ContainerStyled = styled.div`
  margin: 0 auto;
  width: 320px;
  padding-right: 20px;
  padding-left: 20px;

  ${theme.mq.tablet} {
    width: ${({ theme }) => theme.breakpoints[1]};
    padding-right: ${({ theme }) => theme.space[4]};
    padding-left: ${({ theme }) => theme.space[4]};
  }

  ${theme.mq.desktop} {
    width: ${({ theme }) => theme.breakpoints[2]};
    padding-right: ${({ theme }) => theme.space[3]};
    padding-left: ${({ theme }) => theme.space[3]};
  }
`;
