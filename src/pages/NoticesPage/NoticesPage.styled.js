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
  max-width: 100%;
  padding: 40px 20px;

  ${theme.mq.tablet} {
    width: 608px;
    padding: 40px 80px;
  }
`;

export const ImageBox = styled.div`
  margin-top: 30px;
  text-align: center;
`;

export const Image = styled.img`
  width: 80%;
  margin: 0 auto;
  border-radius: 20px;
`;

export const Title = styled.h2`
  margin-right: auto;
  margin-bottom: 16px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  line-height: 1.35;
  color: ${theme.colors.mainText};
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xl};
  }
`;
