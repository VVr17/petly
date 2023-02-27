import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';

export const Container = styled.div`
  width: 240px;
  margin: 100px 20px 40px 20px;
  @media (min-width: ${breakpoints[1]}px) {
    width: 480px;
  }
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.l};
  letter-spacing: -0.01em;
  margin-bottom: 60px;
  text-align: center;
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  justify-content: center;
`;
