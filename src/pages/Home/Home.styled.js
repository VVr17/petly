import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from 'constants/theme';
import waveMobile from 'assets/images/mobile/wave.png';
import waveTablet from 'assets/images/tablet/wave.png';
import waveDesktop from 'assets/images/desktop/wave-bubbel-heart.png';

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

export const WrapContainer = styled.div`
  position: relative;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
  width: ${theme.breakpoints[0]};
  min-height: 532px;
  height: 100%;

  ${theme.mq.tablet} {
    width: ${theme.breakpoints[1]};
    min-height: 1127px;
    padding-right: ${({ theme }) => theme.space[6]};
    padding-left: ${({ theme }) => theme.space[6]};
  }

  ${theme.mq.desktop} {
    width: ${theme.breakpoints[2]};
    padding-right: ${({ theme }) => theme.space[3]};
    padding-left: ${({ theme }) => theme.space[3]};
    min-height: 702px;
  }
`;

export const Images = styled.img`
  position: absolute;
  margin-top: 58px;
  width: 320px;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);

  ${theme.mq.tablet} {
    margin-top: 154px;
    width: 645px;
  }

  ${theme.mq.desktop} {
    margin-top: 0;
    width: 590px;
    right: 15px;
    transform: none;
    left: unset;
  }
`;

export const Background = styled(motion.div)`
  background: bottom 0 left 0 / contain no-repeat url(${waveMobile});
  background-size: 100% 456px;
  width: 100%;
  height: 100%;

  ${theme.mq.tablet} {
    background: bottom 0 left 0 / contain no-repeat url(${waveTablet});
    background-size: 100% 1079px;
  }

  ${theme.mq.desktop} {
    background: bottom 0 center no-repeat url(${waveDesktop});
    background-size: 1550px;
    margin: auto;
  }
`;
