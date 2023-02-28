import React, { useState } from 'react';
import {
  FormWrapper,
  FormField,
  Button,
  AiOutlineSearch,
  AiOutlineCloseCircle,
} from './SearchForm.styled';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const SearchForm = ({ handleSubmit, isSearch }) => {
  const { formatMessage } = useIntl();

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <FormField
        name="search"
        type="text"
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
};

export default SearchForm;
