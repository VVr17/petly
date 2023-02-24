import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';
import { Field, ErrorMessage } from 'formik';
import { RiPencilFill } from 'react-icons/ri';
import { AiOutlineCheck } from 'react-icons/ai';

export const Label = styled.label`
  width: 100%;
  display: flex;
`;

export const Title = styled.span`
  width: 56px;
  margin-right: 26px;
  overflow-x: hidden;

  ${theme.mq.tablet} {
    width: 83px;
    margin-right: 36px;
  }

  ${theme.mq.desktop} {
    width: 83px;
    margin-right: 24px;
  }
`;

export const Input = styled(Field)`
  /* width: 160px; */
  width: 100%;
  height: 24px;
  margin-right: 13px;
  margin-left: auto;
  padding-left: 15px;

  cursor: pointer;
  border-radius: 40px;
  border: 1px solid
    ${({ theme, disabled }) =>
      disabled ? 'transparent' : 'rgba(245, 146, 86, 0.5)'};
  background-color: ${({ theme, disabled }) => {
    // console.log('disabled in input', disabled);
    return disabled ? 'transparent' : `${theme.colors.mainBackground}`;
  }};

  font-family: ${theme.fontFamily.manrope};
  font-size: ${theme.fontSizes.s};
  font-weight: ${theme.fontWeight.normal};
  color: ${theme.colors.mainText};

  ${theme.mq.mobileOnly} {
    font-size: ${theme.fontSizes.xxxs};
  }

  @media (min-width: ${breakpoints[1]}px) {
    width: 216px;
    height: 32px;
    margin-right: 24px;
    padding-left: 10px;
  }
`;

export const Pencil = styled(RiPencilFill)`
  fill: ${theme.colors.accent};
  display: inline-block;

  @media (min-width: ${breakpoints[1]}px) {
    width: 20px;
    height: 20px;
  }
`;

export const Check = styled(AiOutlineCheck)`
  fill: ${theme.colors.accent};
  display: inline-block;

  @media (min-width: ${breakpoints[1]}px) {
    width: 20px;
    height: 20px;
  }
`;

export const ErrorStyle = styled(ErrorMessage)`
  position: absolute;
  bottom: -10px;
  left: 30px;
  font-size: ${theme.fontSizes.xxxs};
  color: red;
  ${theme.mq.mobileOnly} {
    transform: translate(0px, 0px);
  }
`;

// import styled from 'styled-components';
// import { theme, breakpoints } from 'constants/theme';
// import { Field, ErrorMessage } from 'formik';

// export const FieldStyle = styled(Field)`
//   width: 100%;
//   border-radius: 40px;
//   cursor: pointer;
//   margin-bottom: 16px;
//   border: 1px solid rgba(245, 146, 86, 0.5);
//   background-color: ${theme.colors.mainBackground};
//   font-family: ${theme.fontFamily.manrope};
//   font-size: ${theme.fontSizes.s};
//   font-weight: ${theme.fontWeight.normal};
//   color: ${theme.colors.primaryText};
//   padding-left: 28px;
//   padding-right: 28px;
//   padding-top: 9px;
//   padding-bottom: 9px;
//   ${theme.mq.mobileOnly} {
//     font-size: ${theme.fontSizes.xxs};
//     padding: 12px 14px;
//   }
// `;

// export const Label = styled.label`
//   display: block;
//   margin-bottom: 12px;
//   ${theme.mq.mobileOnly} {
//     margin-bottom: 8px;
//   }
//   font-family: ${theme.fontFamily.manrope};
//   font-style: normal;
//   font-weight: ${theme.fontWeight.medium};
//   font-size: ${theme.fontSizes.s};
//   line-height: 1.44;
//   @media (min-width: ${breakpoints[1]}px) {
//     font-size: ${theme.fontSizes.l};
//     margin-top: 12px;
//   }
//   // position: relative;
// `;

// export const ErrorStyle = styled(ErrorMessage)`
//   position: absolute;
//   bottom: -10px;
//   left: 30px;
//   font-size: ${theme.fontSizes.xxxs};
//   color: red;
//   ${theme.mq.mobileOnly} {
//     transform: translate(0px, 0px);
//   }
// `;

// export const StyledSpan = styled.span`
//   color: ${theme.colors.accent};
// `;
// export const FieldWrapper = styled.div`
//   position: relative;
//   padding-bottom: 6px;
// `;
