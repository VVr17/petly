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

const SearchForm = ({ onChange, onSubmit }) => {
  const [isSearch, setIsSearch] = useState(false);
  const { formatMessage } = useIntl();

  const handleChange = e => {
    setIsSearch(true);
    onChange(e);
    if (e.target.value === '') {
      setIsSearch(false);
    }
  };

  const handleClean = e => {
    e.preventDefault();
    onSubmit(e);
    e.currentTarget.reset();
    setIsSearch(false);
  };

  return (
    <FormWrapper onSubmit={handleClean}>
      <FormField
        name="search"
        type="text"
        placeholder={formatMessage({ id: 'search' })}
        onChange={handleChange}
      />
      {!isSearch ? (
        <Button type="button">
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
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
