import styled from 'styled-components';
import { theme } from '../../../constants/theme';
import { motion } from 'framer-motion';

export const StyledModal = styled(motion.div)`
  position: relative;
  max-width: 360px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: ${theme.colors.lightText};

  ${theme.mq.tablet} {
    width: fit-content;
    border-radius: 40px;
    top: 7%;
    max-width: 704px;
  }
`;

export const ButtonCloseModal = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  top: 20px;
  right: 20px;
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.mainBackground};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.accent};
  }

  ${theme.mq.tablet} {
    width: 44px;
    height: 44px;
    top: 28px;
    right: 28px;
  }
`;
