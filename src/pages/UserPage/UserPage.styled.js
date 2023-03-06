import { motion } from 'framer-motion';
import styled from 'styled-components';
import { theme, breakpoints } from '../../constants/theme';

export const Section = styled(motion.section)`
  padding-top: 60px;
  padding-bottom: 40px;
`;
export const UserWrapper = styled.div`
  @media (min-width: ${breakpoints[2]}px) {
    display: flex;
  } ;
`;
