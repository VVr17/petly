import styled from 'styled-components';

export const PageTitle = styled.h2`
  font-family: ${p => p.theme.fontFamily.manrope};
  font-size: 48px;
  margin-bottom: 28px;
  text-align: center;
  line-height: 34px;
  color: ${p => p.theme.colors.mainText};
  text-align: center;
  margin-bottom: 28px;
  ${p => p.theme.mq.tablet} {
    font-size: 48px;
    line-height: 66px;
    margin-bottom: 40px;
  }

  /* ${p => p.theme.mq.desktop} {
    font-size: 72px;
  } */
`;
