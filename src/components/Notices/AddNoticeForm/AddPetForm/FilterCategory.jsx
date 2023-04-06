import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { publicFilter } from 'helpers/noticeFilter';
import {
  ButtonFilterList,
  ButtonFilterLabel,
  ButtonFilterInput,
} from './AddPetForm.styled';

const FilterCategory = ({ value }) => {
  return (
    <ButtonFilterList>
      {publicFilter.map(({ status, filterId }) => (
        <li key={status}>
          <ButtonFilterLabel name="filter" selected={value === status}>
            <FormattedMessage id={filterId} />
            <ButtonFilterInput
              type="radio"
              name="category"
              value={status}
              checked={value === status}
            />
          </ButtonFilterLabel>
        </li>
      ))}
    </ButtonFilterList>
  );
};

FilterCategory.propTypes = {
  value: PropTypes.string,
};

export default FilterCategory;
