import styled from 'styled-components';
import { theme, breakpoints } from 'constants/theme';

export const LoadImageCont = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 208px;
  height: 208px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  color: ${theme.colors.mainText};
  @media(min-width: ${breakpoints[1]}px) {
    width: 182px;
    height: 182px;
  }
`;

export const LoadImgLabel = styled.label`
  margin-top: 20px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 4px;
  @media(min-width: ${breakpoints[1]}px) {
    margin-bottom: 20px;
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
  width: 208px;
  height: 208px;
  border-radius: 20px;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
  @media(min-width: ${breakpoints[1]}px) {
    width: 182px;
    height: 182px;
  }
`;
