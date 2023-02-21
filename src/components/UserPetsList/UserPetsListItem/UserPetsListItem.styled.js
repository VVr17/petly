import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';

export const Item = styled.li`
   margin-top 20px;
   margin-left: auto;
   margin-right: auto;
   width: 280px;
   padding: ${theme.space[4]} ${theme.space[4]} 42px ${theme.space[4]};
   background-color: ${theme.colors.lightText};
   background: #FFFFFF;
   box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
   border-radius: 20px;
   @media(min-width: ${breakpoints[1]}px) {
      width: 704px;
      display: flex;
      padding-bottom: ${theme.space[4]};
   }
   @media(min-width: ${breakpoints[2]}px) {
      width: 820px;
   }
`;

export const InfoBox = styled.div`
  position: relative;
  @media (min-width: ${breakpoints[1]}px) {
    margin-left: ${theme.space[6]};
    width: 470px;
  }
  @media (min-width: ${breakpoints[2]}px) {
    width: 580px;
  }
`;

export const Image = styled.div`
  width: 240px;
  height: 240px;
  background-color: grey;
  border-radius: ${theme.space[4]};
  margin-bottom: ${theme.space[4]};
  @media (min-width: ${breakpoints[1]}px) {
    width: 160px;
    height: 160px;
    margin-bottom: 0;
  } ;
`;

export const Text = styled.p`
  margin-bottom: 12px;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.xxs};
  line-height: 1.35;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export const Span = styled.span`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxs};
  line-height: 1.35;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export const TextComments = styled.p`
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.normal};
  font-size: ${theme.fontSizes.xxs};
  line-height: 1.35;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xs};
  }
`;

export const Button = styled.button`
  position: absolute;
  top: -3px;
  left: 220px;
  width: 21px;
  height: 21px;
  padding: 0 0 0 0;
  border: none;
  outline: none;
  background-color: ${theme.colors.lightText};
  @media (min-width: ${breakpoints[1]}px) {
    top: 0;
    left: 427px;
    width: 45px;
    height: 45px;
    padding: 12px 14px 12px 14px;
    border-radius: 50%;
    background-color: ${theme.colors.mainBackground};
  }
  @media (min-width: ${breakpoints[2]}px) {
    left: 537px;
  }
`;

export const iconStyle = {
  height: '21px',
  width: '17px',
  fill: theme.colors.secondaryText,
};
