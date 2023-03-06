import React from 'react';
import { useIntl } from 'react-intl';
import InputField from 'components/Ui-Kit/Input/Input';
import MyDataPicker from 'components/Notices/AddNoticeForm/AddPetForm/StepOne/DatePicker';
import { Label, DateBox, ErrorData } from './UserAddPetForm.styled';
import { StyledSpan } from 'components/Ui-Kit/Input/Input.styled';

const PartFirst = () => {
  const { formatMessage } = useIntl();

  return (
    <>
      <InputField
        label={formatMessage({ id: 'namePet' })}
        id="name"
        type="text"
        name="name"
        placeholder={formatMessage({ id: 'typeNamePet' })}
        span="*"
      />
      <DateBox>
        <Label>
          {formatMessage({ id: 'dateBirth' })}
          <StyledSpan>*</StyledSpan>
        </Label>
        <MyDataPicker
          name="birthDate"
          label="Date of birth*"
          placeholder={formatMessage({ id: 'typeDateBirth' })}
        />
        <ErrorData name="birthDate" component="div" />
      </DateBox>
      <InputField
        label={formatMessage({ id: 'breed' })}
        id="breed"
        type="text"
        name="breed"
        placeholder={formatMessage({ id: 'typeBreed' })}
        span="*"
      />
    </>
  );
};

export default PartFirst;
