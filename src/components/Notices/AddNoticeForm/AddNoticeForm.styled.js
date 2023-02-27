import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';

export const FormTitle = styled.h3`
  color: ${theme.colors.mainText};
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.semiBold};
  font-size: ${theme.fontSizes.xxl};
`;

export const Text = styled.p`
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
  margin: 20px 0;
  text-align: center;
`;

export const ButtonFilterList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ButtonFilterItem = styled.li`
  margin-right: 15px;
  margin-bottom: 28px;
`;
