import styled from 'styled-components';
import { theme, breakpoints } from '../../constants/theme';
import Modal from 'styled-react-modal';

export const Overlay = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  z-index: 30;
  opacity: ${theme.colors.secondaryText};
  background-color: ${theme.colors.secondaryText};
`;

export const StyledModal = styled.div`
  position: relative;
  width: 608px;

  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  margin-top: 40ox;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  background-color: ${theme.colors.lightText};
`;

// export const StyledModal = Modal.styled`
// position: relative;
//   width: 608px;

//   display: flex;
//   flex-direction: column;
//   padding: 40px 80px;
//   margin-top: 40ox;
//   align-items: center;
//   justify-content: center;
//   border-radius: 40px;
//   background-color: ${theme.colors.lightText};
// `;

// export const SpecialModalBackground = styled.div`
//   display: flex;
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100vw;
//   height: 100vh;
//   align-items: center;
//   justify-content: center;
//   z-index: 30;
//   opacity: ${theme.colors.secondaryText};
//   background-color: ${theme.colors.secondaryText};
// `;

export const ButtonCloseModal = styled.button`
  position: absolute;
  width: 44px;
  height: 44px;
  top: 28px;
  right: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100%;
  background-color: mainBackground;
  cursor: pointer;

  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }
`;
