import { theme } from '../../constants/theme';
import styled from 'styled-components';

export const CardNotice = styled.div`
  position: relative;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  background-color: ${theme.colors.cardBackground};
  box-shadow: ${theme.boxShadow.notices};
`;

export const ContainerInfo = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  font-size: ${theme.fontSizes.xl};
  font-weight: ${theme.fontWeight.bold};
  line-height: 1.37;
  letter-spacing: -0.01em;
  margin-bottom: 20px;
  overflow: hidden;
`;

export const Thead = styled.th`
  min-width: 90px;
  text-align: left; 
  font-weight: ${theme.fontWeight.medium};  
`;

export const Text = styled.td`  
  width: 100%;
  overflow: hidden;
`;

export const CategoryBox = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  width: 158px;
  border-radius: 0px 20px 20px 0px;
  background-color: ${theme.colors.secondaryBackground};
`;

export const CategoryName = styled.p`
  font-size: ${theme.fontSizes.xxs};
  line-height: 1.37;
  padding: 6px 20px;
`;

export const ContainerButton = styled.div`
  display: grid;
  gap: 12px;  
`
