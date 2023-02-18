import styled from 'styled-components';
import { theme, breakpoints } from '../../../constants/theme';

export const FormWrapper = styled.form`
position: relative;
width: 608px;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
 
  } ;
`;

export const FormField = styled.input`
  width: 608px;
  height: 44px;
  padding: 20px;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  border-radius: 40px;
  border-color: transparent;
 
  } ;
`;

export const Button = styled.button`
border: none;
position: absolute;
background-color: ${theme.colors.lightText};
bottom: 7px;
right: 15px;
cursor: pointer;
&:hover, &:focus {
    color: ${theme.colors.accent};
}
 
  } ;
`;
