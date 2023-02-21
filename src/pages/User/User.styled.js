import styled from "styled-components";
import { theme, breakpoints } from '../../constants/theme';

export const Section = styled.section`
   margin-top: 60px;
   margin-bottom: 40px;
`;

export const Container = styled.div`
   @media(min-width: ${breakpoints[2]}px) {
      display: flex;
      justify-content; center;
      align-items-center;
      padding 0 ${theme.space[3]} 0 ${theme.space[3]};
   };
`;