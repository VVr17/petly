import { theme } from 'constants/theme';
import styled from 'styled-components';
import waveMobile from 'assets/images/mobile/wave-login-register.svg';
import waveTablet from 'assets/images/tablet/waves-bubbles-login-register.svg';
import waveDesktop from 'assets/images/desktop/waves-bubbles-login-register.svg';

export const Wrapper = styled.div`
  background: bottom -130px left 0 / contain no-repeat url(${waveMobile});
  background-size: 100% 456px;
  width: 100%;
  height: 100%;

  ${theme.mq.tablet} {
    background: bottom 0 left 0 / contain no-repeat url(${waveTablet});
    background-size: 100%;
  }

  ${theme.mq.desktop} {
    position: fixed;
    background: bottom 65px center no-repeat url(${waveDesktop});
  }
`;
