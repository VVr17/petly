import React from 'react';
import { TextareaLabel, Textarea } from '../AddPetForm.styled';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import { useField } from 'formik';
import PropTypes from 'prop-types';

const CommentField = ({ name }) => {
  const [field] = useField(name);

  return (
    <>
      <TextareaLabel>
        Comments<StyledSpan>*</StyledSpan>
      </TextareaLabel>
      <Textarea
        {...field}
        as="textarea"
        type="text"
        placeholder="Type comment"
      />
    </>
  );
};
CommentField.propTypes = {
  name: PropTypes.string,
};
export default CommentField;
