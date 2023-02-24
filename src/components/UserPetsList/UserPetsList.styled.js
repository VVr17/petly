import styled from 'styled-components';
import { theme, breakpoints } from '../../constants/theme';

export const Container = styled.div`
  /* max-width: ${breakpoints[0]}px; */
  box-sizing: border-box;
  padding: 40px ${theme.space[4]} ${theme.space[4]} ${theme.space[4]};
  margin-right: auto;
  margin-left: auto;
  @media(min-width: ${breakpoints[1]}px) {
    max-width: ${breakpoints[1]}px;
    padding: ${theme.space[4]} ${theme.space[6]} 100px ${theme.space[6]};
  ;
  @media(min-width: ${breakpoints[2]}px) {
    max-width: 820px;
    margin-left: 32px;
    padding: 0 0 0 0;
  ;
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h2`
  margin-right: auto;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  line-height: 1.35;
  color: ${theme.colors.mainText};
  @media(min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.xl}
  ;
`;

export const List = styled.ul`
  list-style-type: none;
`;

export const iconStyle = {
  height: '20px',
  width: '20px',
  fill: theme.colors.lightText,
};
