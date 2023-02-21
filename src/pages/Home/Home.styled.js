import { theme } from 'constants/theme';
import styled from 'styled-components';
import waveMobile from 'assets/images/mobile/wave.png';
import waveTablet from 'assets/images/tablet/wave.png';
import waveDesktop from 'assets/images/desktop/wave-bubbel-heart.png';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';
import { motion } from 'framer-motion';

export const Title = styled.h1`
  padding-top: 50px;
  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.xxl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  color: ${theme.colors.mainText};

  ${theme.mq.tablet} {
    padding-top: 95px;
    font-size: ${theme.fontSizes.xxxxl};
    line-height: 1.47;
  }
`;

export const WrapContainer = styled(motion.div)`
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  width: ${theme.breakpoints[0]};
  min-height: 532px;
  /* background: url(${waveMobile}) no-repeat bottom 0 left 0; */
  /* background-size: 100% 456px; */
  /* position: relative; */

  ${theme.mq.tablet} {
    width: ${theme.breakpoints[1]};
    min-height: 1127px;
    padding-right: ${({ theme }) => theme.space[6]};
    padding-left: ${({ theme }) => theme.space[6]};
    /* background: url(${waveTablet}) no-repeat bottom 0 left 0px; */
  }

  ${theme.mq.desktop} {
    width: ${theme.breakpoints[2]};
    padding-right: ${({ theme }) => theme.space[3]};
    padding-left: ${({ theme }) => theme.space[3]};
    min-height: 702px;
    /* background: url(${waveDesktop}) no-repeat bottom 0 left 62px; */
  }
`;

export const Images = styled.img`
  margin-top: 58px;
  width: 320px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;

export const Background = styled.div`
  background: bottom 0 left 0 / contain no-repeat url(${waveMobile});
  background-size: 100% 456px;
  width: 100%;

  ${theme.mq.tablet} {
    background: bottom 0 left 0 / contain no-repeat url(${waveTablet});
    background-size: 100% 1079px;
  }

  ${theme.mq.desktop} {
    background: bottom 0 left 62px / contain no-repeat url(${waveDesktop});
    background-size: 100% 598px;
  }
`;
