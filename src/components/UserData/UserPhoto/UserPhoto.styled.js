import { breakpoints, theme } from 'constants/theme';
import styled from 'styled-components';

export const ImageBox = styled.div`
  position: relative;
  padding: 0 12px 32px 12px;

  @media (min-width: ${breakpoints[1]}px) {
    /* margin-right: 40px; */
    padding: 0;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin: 0 auto;
    margin-bottom: 32px;

    & button {
      position: absolute;
      right: -74px;
      bottom: 0;
    }
  }
`;

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
  margin-bottom: 28px;
  color: ${theme.colors.mainText};
`;

export const LoadImgLabel = styled.label`
  cursor: pointer;
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

export const UploadField = styled(LoadImageCont)`
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
