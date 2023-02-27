import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: centre;
`;

export const FormContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 240px;
  margin: 40px 20px;
  @media (min-width: ${breakpoints[1]}px) {
    width: 450px;
    margin: 40px 80px;
  }
`;
