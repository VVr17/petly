import { breakpoints, theme } from 'constants/theme';
import styled from 'styled-components';
import { Field } from 'formik';

export const ImageBox = styled.div`
  position: relative;
  padding: 0 12px 32px 12px;

  @media (min-width: ${breakpoints[1]}px) {
    /* margin-right: 40px; */
    padding: 0;
  }
  @media (min-width: ${breakpoints[2]}px) {
    margin: 0 auto;
    /* margin-bottom: 32px; */

    & button {
      position: absolute;
      right: -74px;
      bottom: 0;
    }
  }
`;

export const LoadImageCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 233px;
  height: 233px;
  border-radius: 50%;
  background: ${theme.colors.mainBackground};
  margin-top: 12px;
  margin-bottom: 28px;
  color: ${theme.colors.mainText};
`;

export const LoadImgLabel = styled.label`
  position: absolute;
  bottom: 0px;
  right: 0px;
  display: flex;
  align-items: flex-end;
  gap: 4px;
  margin-left: auto;
  margin-right: 12px;
  padding: 0;
  border: none;
  background-color: white;
  cursor: pointer;

  ${theme.mq.tablet} {
    bottom: -32px;
    right: 0px;
  }

  ${theme.mq.desktop} {
    bottom: 0px;
    right: -64px;
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
