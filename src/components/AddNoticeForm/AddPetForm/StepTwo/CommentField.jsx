import React from 'react';
import {
  TextareaLabel,
  Textarea,
  TextareaContainer,
  ErrorStyle,
} from '../AddPetForm.styled';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const CommentField = ({ name, form }) => {
  const [field, meta, helpers] = useField(name);

  return (
    <>
      <TextareaContainer>
        <TextareaLabel>
          Comments<StyledSpan>*</StyledSpan>
        </TextareaLabel>
        <Textarea
          {...field}
          name={name}
          form={form}
          as="textarea"
          type="text"
          placeholder="Type comment"
        />
        <ErrorStyle name={name} component="div" />
      </TextareaContainer>
    </>
  );
};
CommentField.propTypes = {
  name: PropTypes.string,
  form: PropTypes.string,
};
export default CommentField;
