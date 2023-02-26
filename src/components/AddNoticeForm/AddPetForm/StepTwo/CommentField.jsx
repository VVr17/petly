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

const CommentField = ({ name }) => {
  const [field, meta, helpers] = useField(name);

  const { value } = meta;
  const { setValue } = helpers;

  return (
    <>
      <TextareaContainer>
        <TextareaLabel>
          Comments<StyledSpan>*</StyledSpan>
        </TextareaLabel>
        <Textarea
          {...field}
          name={name}
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
};
export default CommentField;
