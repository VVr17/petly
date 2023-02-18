import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FormWrapper, FormField, Button } from './SearchForm.styled';

const SearchForm = handleSubmit => {
  return (
    <FormWrapper onSubmit={() => handleSubmit()}>
      <FormField name="search" type="text" placeholder="Search" />

      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </FormWrapper>
  );
};

export default SearchForm;
