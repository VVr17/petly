import { theme } from 'constants/theme';
import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 28px;
  text-align: center;
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  color: ${theme.colors.mainText};

  ${theme.mq.tablet} {
    margin-bottom: 40px;
    font-size: ${theme.fontSizes.xxxl};
  }
`;

export const WrapperTitle = styled.div`
  margin-bottom: 40px;

  ${theme.mq.tablet} {
    margin-bottom: 60px;
  }
`;

export const CardList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;

  ${theme.mq.tablet} {
    flex-wrap: wrap;
    flex-direction: row;
    gap: 60px 32px;
    justify-content: unset;
  }
`;
