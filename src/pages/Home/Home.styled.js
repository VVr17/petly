import { theme } from 'constants/theme';
import styled from 'styled-components';
import waveMobile from 'assets/images/mobile/wave.svg';
import waveTablet from 'assets/images/tablet/wave.svg';
import waveDesktop from 'assets/images/desktop/wave-bubbel-heart.svg';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';

export const Title = styled.h1`
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  color: ${theme.colors.mainText};

  ${theme.mq.tablet} {
    font-size: ${theme.fontSizes.xxxxl};
    line-height: 1.47;
  }

  ${theme.mq.desktop} {
    padding-top: 32px;
  }
`;

export const WrapContainer = styled.div`
  margin-top: 60px;
  height: 100vh;
  background: url(${portraitMobile}) no-repeat top 145px left -0px,
    url(${waveMobile}) no-repeat top 27px left 0px;

  ${theme.mq.tablet} {
    margin-top: 88px;
    background: url(${portraitTablet}) no-repeat top 316px left 60px,
      url(${waveTablet}) no-repeat top -50px left 0px;
  }

  ${theme.mq.desktop} {
    margin-top: 60px;
    background: url(${portraitDesktop}) no-repeat top 0px left 742px,
      url(${waveDesktop}) no-repeat top 40px left 67px;
  }
`;
