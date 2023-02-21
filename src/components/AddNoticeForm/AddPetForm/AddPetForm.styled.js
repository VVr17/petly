import styled from 'styled-components';
import { Form, Field } from 'formik';
import { theme, breakpoints } from 'constants/theme';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ButtonsContainer = styled.div`
  margin-top: 40px;
  display: flex;
  gap: 20px;
`;

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

export const RadioContainer = styled.div`
  display: flex;
`;

export const RadioLabel = styled.label`
  cursor: pointer;
  font-family: ${theme.fontFamily.manrope};
  font-weight: ${theme.fontWeight.medium};
  font-size: ${theme.fontSizes.m};
`;

export const RadioButton = styled(Field)`
  // display: none;
  &:checked + ${RadioLabel} {
    color: ${theme.colors.accent};
  }
`;
