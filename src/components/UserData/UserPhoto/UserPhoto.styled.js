import { breakpoints, theme } from 'constants/theme';
import styled from 'styled-components';

export const ImageBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 8px;

  @media (min-width: ${breakpoints[1]}px) {
    padding-bottom: 30px;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin-bottom: 32px;
  }
`;

export const LoadImageCont = styled.div`
  cursor: pointer;
  width: 233px;
  height: 233px;
  border-radius: 50%;
  background: ${theme.colors.mainBackground};
  color: ${theme.colors.mainText};
`;

export const LoadImgLabel = styled.label`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-left: auto;
  margin-right: 12px;
  padding: 0;
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 12px;

  ${theme.mq.tablet} {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  ${theme.mq.desktop} {
    bottom: 0px;
    right: -84px;
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
  width: 233px;
  height: 233px;
  border-radius: 50%;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
`;
export const ErrorStyle = styled.div`
  position: absolute;
  bottom: 0px;
`;

export const UploadField = styled.div`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  margin: 0 auto;

  @media (min-width: ${breakpoints[1]}px) {
    margin: 0 0 8px;
  }

  @media (min-width: ${breakpoints[2]}px) {
    margin: 0;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-left: auto;
  margin-right: 12px;
  padding: 0;
  border: none;
  background-color: white;
  cursor: pointer;
`;

export const iconStyle = {
  height: '20px',
  width: '20px',
  fill: theme.colors.accent,
  color: theme.colors.accent,
};

export const editBtn = {
  gap: '4px',
  marginLeft: 'auto',
};
