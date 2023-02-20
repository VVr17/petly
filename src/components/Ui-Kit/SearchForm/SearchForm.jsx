import React from 'react';
import {
  FormWrapper,
  FormField,
  Button,
  AiOutlineSearch,
} from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ handleSubmit }) => {
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
