import { theme } from 'constants/theme';
import { motion } from 'framer-motion';
import styled from 'styled-components';

export const SectionStyled = styled(motion.section)`
  margin: 0 auto;
  padding-top: 42px;
  padding-bottom: 100px;

  ${theme.mq.tablet} {
    padding-top: 90px;
  }
  ${theme.mq.desktop} {
    padding-top: 60px;
    padding-bottom: 200px;
  }
`;
