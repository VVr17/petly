import { Box } from 'components/Box/Box';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import React from 'react';
import { Background, Images, Title, WrapContainer } from './Home.styled';
import { breakpoints } from 'constants/theme';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';

const Home = () => {
  return (
    <Background {...pageAnimation} transition={{ duration: 2.0 }}>
      <WrapContainer>
        <Title>
          Take good care of <br />
          your small pets
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
