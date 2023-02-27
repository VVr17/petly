import React from 'react';
import { FormTitle } from './AddNoticeForm.styled';
import { FormattedMessage } from 'react-intl';

const AddNoticeFormHeader = () => {
  return (
    <>
      <FormTitle>
        <FormattedMessage id="addPet" />
      </FormTitle>
    </>
  );
};

// const AddPetFormSecond = () => {};

export default AddNoticeFormHeader;
