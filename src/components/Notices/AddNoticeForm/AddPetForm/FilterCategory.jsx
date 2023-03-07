import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  ButtonFilterList,
  ButtonFilterItem,
  ButtonFilterLabel,
  ButtonFilterInput,
} from './AddPetForm.styled';

const FilterCategory = ({ value }) => {
  return (
    <ButtonFilterList>
      <ButtonFilterItem>
        <ButtonFilterLabel name="filter" selected={value === 'lost-found'}>
          <FormattedMessage id="lostFound" />
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
          <FormattedMessage id="goodHands" />
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
          <FormattedMessage id="sell" />
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
