import { Box } from 'components/Box/Box';
import Container from 'components/Container';
import { pageAnimation } from 'constants/animation';
import React from 'react';
import { Background, Images, Title, WrapContainer } from './Home.styled';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';

const Home = () => {
  return (
    <Background>
      <WrapContainer {...pageAnimation} transition={{ duration: 0.3 }}>
        <Title>
          Take good care of <br />
          your small pets
        </Title>
        <Images src={portraitMobile} />
      </WrapContainer>
    </Background>
  );
};

export default Home;
