import React, { useState } from 'react';
import {
  FormWrapper,
  FormField,
  Button,
  AiOutlineSearch,
  AiOutlineCloseCircle,
} from './SearchForm.styled';
import PropTypes from 'prop-types';

const SearchForm = ({ handleSubmit }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [value, setValue] = useState('');

  const submitForm = e => {
    e.preventDefault();
    setIsSearch(true);
    handleSubmit(e, value);
  };

  const handleClick = e => {
    setIsSearch(false);
    e.preventDefault();
    setValue('');
    handleSubmit(e, '');
  };

  return (
    <FormWrapper onSubmit={submitForm}>
      <FormField
        name="search"
        type="text"
        placeholder="Search"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      {!isSearch ? (
        <Button type="submit">
          <AiOutlineSearch />
        </Button>
      ) : (
        <Button type="button" name="clear" onClick={handleClick}>
          <AiOutlineCloseCircle />
        </Button>
      )}
    </FormWrapper>
  );
};

SearchForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SearchForm;
