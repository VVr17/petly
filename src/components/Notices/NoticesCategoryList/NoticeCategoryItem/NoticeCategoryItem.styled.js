import { theme } from 'constants/theme';
import styled from 'styled-components';

export const CardNotice = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 0px 0px 20px 20px;
  background-color: ${theme.colors.cardBackground};
  box-shadow: ${theme.boxShadow.main};
  height: 100%;
`;

export const ImageBox = styled.div`
  width: 100%;
  height: 288px;
`;

export const Image = styled.img`
  height: 100%;
  object-fit: cover;
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
  padding: 0 16px 12px;
  margin: auto auto 0;
  ${theme.mq.tabletOnly} {
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    padding: 0 44px 12px;
  }
`;

export const ToggleFavoriteButton = styled.button`
  position: absolute;
  right: 12px;
  top: 12px;
  width: 44px;
  height: 44px;
  padding: 0;
  display: flex;
  border: none;
  border-radius: 50%;
  background-color: ${theme.colors.secondaryBackground};
  cursor: pointer;
  align-items: center;
  justify-content: center;
  svg {
    fill: ${({ theme, isFavorite }) =>
      isFavorite ? theme.colors.accent : theme.colors.secondaryBackground};
    color: ${theme.colors.accent};
    stroke-width: 30px;
  }
`;
