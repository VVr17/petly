import React from 'react';
import PropTypes from 'prop-types';
import MyDatePicker from './DatePicker';
import InputField from 'components/Ui-Kit/Input';
import { useIntl } from 'react-intl';
import 'react-datepicker/dist/react-datepicker.css';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';
import { Text, DatePickerContainer } from '../AddPetForm.styled';
import { Label, ErrorStyle } from 'components/Ui-Kit/Input/Input.styled';

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
