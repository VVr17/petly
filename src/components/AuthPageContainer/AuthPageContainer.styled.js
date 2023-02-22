import { theme } from 'constants/theme';
import styled from 'styled-components';
import waveMobile from 'assets/images/mobile/wave-login-register.svg';
import waveTablet from 'assets/images/tablet/waves-bubbles-login-register.svg';
import waveDesktop from 'assets/images/desktop/waves-bubbles-login-register.svg';

export const Wrapper = styled.div`
  background: bottom -150px left 0 / contain no-repeat url(${waveMobile});
  background-size: 100% 456px;
  width: 100%;
  /* min-height: 500px; */
  height: 100%;

  ${theme.mq.tablet} {
    background: bottom 0 left 0 / contain no-repeat url(${waveTablet});
    background-size: 100%;
    /* min-height: 1024px; */
  }

  ${theme.mq.desktop} {
    position: fixed;
    background: bottom -10px center no-repeat url(${waveDesktop});
    /* min-height: 768px; */
  }
`;
