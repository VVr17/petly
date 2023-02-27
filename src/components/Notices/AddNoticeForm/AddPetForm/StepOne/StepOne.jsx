import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import InputField from 'components/Ui-Kit/Input';
import { Text, DatePickerContainer } from '../AddPetForm.styled';
import MyDatePicker from './DatePicker';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import PropTypes from 'prop-types';
import { Label, ErrorStyle } from 'components/Ui-Kit/Input/Input.styled';
import { useIntl } from 'react-intl';

const StepOne = ({ children }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <Text>{formatMessage({ id: 'chooseCategory' })}</Text>
      {children}

      <InputField
        name="title"
        type="text"
        placeholder={formatMessage({ id: 'typeName' })}
        label={formatMessage({ id: 'titleAds' })}
        span="*"
      />
      <InputField
        name="name"
        type="text"
        placeholder={formatMessage({ id: 'typeNamePet' })}
        label={formatMessage({ id: 'namePet' })}
        span="*"
      />
      <DatePickerContainer>
        <Label name="birthDate">
          {formatMessage({ id: 'dateBirth' })}
          <StyledSpan>*</StyledSpan>
        </Label>
        <MyDatePicker
          name="birthDate"
          label="Date of birth*"
          placeholder="Type date of birth"
        />
        <ErrorStyle name="birthDate" component="div" />
      </DatePickerContainer>
      <InputField
        name="breed"
        type="text"
        placeholder={formatMessage({ id: 'typeBreed' })}
        label={formatMessage({ id: 'breed' })}
        span="*"
      />
    </>
  );
};
StepOne.propTypes = {
  children: PropTypes.node,
};
export default StepOne;
