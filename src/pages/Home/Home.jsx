import { Box } from 'components/Box/Box';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { pageAnimation } from 'constants/animation';
import React from 'react';
import { Background, Images, Title, WrapContainer } from './Home.styled';
import { breakpoints } from 'constants/theme';
import portraitMobile from 'assets/images/mobile/portrait-and-favorite-pet.png';
import portraitTablet from 'assets/images/tablet/portrait-and-favorite-pet.png';
import portraitDesktop from 'assets/images/desktop/portrait-and-favorite-pet.png';

const Home = () => {
  const click = () => {
    notify();
    console.log('first');
    return toast.info('Please, register or login to add notice to favorite');
    toast.success('Success Notification !', {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  const notify = () => toast('Wow Info !');
  const notifyInfo = () => toast.info('Wow Info !');
  const notifySuccess = () => toast.success('Wow so Success !');
  const notifyWarning = () => toast.warning('Wow so Warning !');
  const notifyError = () => toast.error('Wow Error !');

  return (
    <Background {...pageAnimation} transition={{ duration: 0.3 }}>
      <WrapContainer>
        <Title onClick={click}>
          Take good care of <br />
          your small pets
        </Title>
        <button onClick={notify}>Notify !</button>
        <button onClick={notifyInfo}>NotifyInfo !</button>
        <button onClick={notifySuccess}>NotifySuccess !</button>
        <button onClick={notifyWarning}>NotifyWarning !</button>
        <button onClick={notifyError}>NotifyError !</button>
        {/* <ToastContainer /> */}
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
