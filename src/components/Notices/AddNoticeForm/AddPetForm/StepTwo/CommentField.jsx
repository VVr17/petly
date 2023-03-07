import React from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';
import { useIntl } from 'react-intl';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import {
  TextareaLabel,
  Textarea,
  TextareaContainer,
  ErrorStyle,
} from '../AddPetForm.styled';

const CommentField = ({ name, form }) => {
  const [field, meta, helpers] = useField(name);
  const { formatMessage } = useIntl();

  return (
    <>
      <TextareaContainer>
        <TextareaLabel>
          {formatMessage({ id: 'comment' })}
          <StyledSpan>*</StyledSpan>
        </TextareaLabel>
        <Textarea
          {...field}
          name={name}
          form={form}
          as="textarea"
          type="text"
          placeholder={formatMessage({ id: 'typeComment' })}
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
