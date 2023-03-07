import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import { theme, breakpoints } from 'constants/theme';
import { ErrorMessage } from 'formik';
import { HiCamera } from 'react-icons/hi2';

export const MyDatePickerNew = styled(DatePicker)`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;

  border-radius: 40px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? 'transparent' : 'rgba(245, 146, 86, 0.5)'};
  background-color: ${({ theme, disabled }) =>
    disabled ? 'transparent' : `${theme.colors.mainBackground}`};

  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.mainText};

  ::placeholder {
    color: ${({ theme, disabled }) =>
      disabled ? theme.colors.mainText : theme.colors.secondaryText};
    opacity: 1;
  }

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  bottom: -10px;
  /* left: 0; */
  font-size: 8px;
  color: red;
  max-width: 230px;
  max-height: 10px;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export const FieldWrapper = styled.div`
  max-width: 379px;
  display: flex;
  align-items: center;
  font-family: ${theme.fontFamily.manrope};
  font-style: normal;
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.xxxs};
  line-height: 1.33;
  color: ${theme.colors.mainText};

  @media (min-width: ${breakpoints[1]}px) {
    font-size: ${theme.fontSizes.s};
    line-height: 1.39;
    width: 100%;
  }

  ${theme.mq.desktop} {
    margin-right: 0;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  margin-right: 13px;
  ${theme.mq.mobileOnly} {
    width: 100%;
  }

  ${theme.mq.desktop} {
    width: 100%;
    margin-right: 12px;
  }
`;

export const Title = styled.span`
  width: 90px;
  white-space: nowrap;

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }

  ${theme.mq.tablet} {
    width: 90px;
    margin-right: 26px;
  }

  ${theme.mq.desktop} {
    width: 83px;
    margin-right: 13px;
  }
`;

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

export const LoadImgLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: auto;
  margin-right: 12px;
  border: none;
  background-color: white;
  cursor: pointer;
  font-size: 12px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  border-radius: 15px;
  transition: background-color ${theme.transitionTiming},
    color ${theme.transitionTiming};

  ${theme.mq.tablet} {
    position: absolute;
    bottom: 0px;
    right: 0px;
  }

  ${theme.mq.desktop} {
    bottom: 0px;
    right: -84px;
  }

  svg {
    transition: color ${theme.transitionTiming};
  }

  &:hover,
  &:focus {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.lightText};

    svg {
      color: ${theme.colors.lightText};
    }
  }
`;

export const LoadImgInput = styled.input`
  display: none;
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
  color: ${theme.colors.mainText};
`;

export const ImagePreview = styled.img`
  width: 233px;
  height: 233px;
  border-radius: 50%;
  background: ${theme.colors.mainBackground};
  object-fit: cover;
  cursor: initial;
`;

export const LoadImgPlus = styled.img`
  width: 47px;
  height: 47px;
`;

export const Camera = styled(HiCamera)`
  height: '20px';
  width: '20px';
  color: ${theme.colors.accent};
`;
