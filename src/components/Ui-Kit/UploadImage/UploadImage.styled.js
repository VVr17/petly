import styled from 'styled-components';
import { breakpoints, theme } from 'constants/theme';

export const LoadImageCont = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  margin-top: 12px;
  margin-bottom: 20px;
  color: ${theme.colors.mainText};
`;

export const LoadImgLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-items: ${({ form }) => (form === 'userPet' ? 'center' : 'left')};

  cursor: pointer;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.s};
  line-height: 1.37;
  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.l};
    line-height: 1.08;
    margin-top: ${({ form }) => (form === 'userPet' ? '0px' : '16px')};
  }
`;

export const LoadImgInput = styled.input`
  display: none;
`;
export const LoadImgPlus = styled.img`
  width: 47px;
  height: 47px;
`;
export const ImagePreview = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
`;
export const ErrorStyle = styled.div`
  position: absolute;
  bottom: 0px;
`;
