import { theme } from 'constants/theme';
import styled from 'styled-components';
import { motion } from 'framer-motion';

export const GalleryNotices = styled(motion.ul)`
  display: grid;
  grid-gap: 32px;
  margin-top: 30px;

  ${theme.mq.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    margin-top: 60px;
  }

  ${theme.mq.desktop} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }

  li {
    height: 100%;
  }
`;
