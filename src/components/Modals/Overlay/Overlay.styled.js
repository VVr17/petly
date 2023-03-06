import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { motion } from 'framer-motion';

export const OverlayStyled = styled(motion.div)`
  padding: 20px;
  position: fixed;
  overflow: scroll;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: overlay;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  backdrop-filter: blur(5px);
  opacity: ${theme.colors.secondaryText};
  background-color: ${theme.colors.secondaryText};
`;
