import styled from "styled-components";
import { Form } from "formik";

export const ModalWrapper = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10vh;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 400px;
  height: 380px;
`;

export const FormWrapper = styled(Form)`
    display:flex;
    flex-direction: column;
    gap: 10px;
`