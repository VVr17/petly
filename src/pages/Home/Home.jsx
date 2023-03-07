import React from 'react';
import { FormattedMessage } from 'react-intl';
import { pageAnimation } from 'constants/animation';
import { breakpoints } from 'constants/theme';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';
import 'react-toastify/dist/ReactToastify.css';
import { Background, Images, Title, WrapContainer } from './Home.styled';

const Home = () => {
  return (
    <Background {...pageAnimation} transition={{ duration: 0.3 }}>
      <WrapContainer>
        <Title>
          <FormattedMessage id="homeMsg" values={{ break: <br /> }} />
        </Title>
        <Images
          src={portraitMobile}
          srcSet={`${portraitMobile} ${breakpoints[0]}w, ${portraitTablet} ${breakpoints[1]}w, ${portraitDesktop} ${breakpoints[2]}w`}
          alt="Girl with pappy"
        />
      </WrapContainer>
    </Background>
  );
};

export default Home;
