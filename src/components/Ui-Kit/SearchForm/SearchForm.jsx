import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FormWrapper, FormField, Button } from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ handleSubmit }) => {
  console.log('handleSubmit', handleSubmit);
  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField name="search" type="text" placeholder="Search" />

      <Button type="submit">
        <AiOutlineSearch />
      </Button>
    </FormWrapper>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchForm;
