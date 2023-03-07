import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import {
  FormWrapper,
  FormField,
  Button,
  AiOutlineSearch,
  AiOutlineCloseCircle,
} from './SearchForm.styled';

const SearchForm = ({ handleSubmit, isSearch, handleChange }) => {
  const { formatMessage } = useIntl();

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField
        name="search"
        type="text"
        onChange={handleChange}
        placeholder={formatMessage({ id: 'search' })}
      />
      {!isSearch ? (
        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      ) : (
        <Button type="submit" name="clear">
          <AiOutlineCloseCircle />
        </Button>
      )}
    </FormWrapper>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
  isSearch: PropTypes.bool,
  handleChange: PropTypes.func,
};

export default SearchForm;
