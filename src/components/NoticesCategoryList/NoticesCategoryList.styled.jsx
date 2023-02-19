import { theme } from '../../constants/theme';
import styled from 'styled-components';

export const GalleryNotices = styled.div`
  display: grid;
  grid-gap: 32px;

  ${theme.mq.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
  }

  ${theme.mq.desktop} {
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  }
`;
