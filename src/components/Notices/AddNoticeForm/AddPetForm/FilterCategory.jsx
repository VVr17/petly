import React, { useState } from 'react';
import {
  ButtonFilterList,
  ButtonFilterItem,
  ButtonFilterLabel,
  ButtonFilterInput,
} from './AddPetForm.styled';
import PropTypes from 'prop-types';

const FilterCategory = ({ value }) => {
  return (
    <ButtonFilterList>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'lost-found'}>
          lost/found
          <ButtonFilterInput
            type="radio"
            name="category"
            value="lost-found"
            checked={value === 'lost-found'}
          />
        </ButtonFilterLabel>
      </ButtonFilterItem>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'in-good-hands'}>
          in good hands
          <ButtonFilterInput
            type="radio"
            name="category"
            value="in-good-hands"
            checked={value === 'in-good-hands'}
          />
        </ButtonFilterLabel>
      </ButtonFilterItem>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'sell'}>
          sell
          <ButtonFilterInput
            type="radio"
            name="category"
            value="sell"
            checked={value === 'sell'}
          />
        </ButtonFilterLabel>
      </ButtonFilterItem>
    </ButtonFilterList>
  );
};

FilterCategory.propTypes = {
  value: PropTypes.string,
};

export default FilterCategory;
