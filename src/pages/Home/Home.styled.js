import { theme } from 'constants/theme';
import styled from 'styled-components';
import wave from 'assets/images/mobile/wave.svg';
import portrait from 'assets/images/mobile/portrait-and-favorite-pet.png';

export const Title = styled.h1`
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  color: ${theme.colors.mainText};
`;

export const WrapContainer = styled.div`
  margin-top: 60px;
  height: 100vh;
  background: url(${portrait}) no-repeat top 145px left -0px,
    url(${wave}) no-repeat top 26px left -87px;
`;
