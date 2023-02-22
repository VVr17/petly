import React from 'react';
import { TextareaLabel, Textarea } from '../AddPetForm.styled';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';

const CommentField = () => {
  return (
    <>
      <TextareaLabel>
        Comments<StyledSpan>*</StyledSpan>
      </TextareaLabel>
      <Textarea
        as="textarea"
        name="comment"
        type="text"
        placeholder="Type comment"
      />
    </>
  );
};
export default CommentField;
