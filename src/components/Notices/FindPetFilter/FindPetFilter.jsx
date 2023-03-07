import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusFilter } from 'redux/filter/filterSlice.js';
import { selectStatusFilter } from 'redux/filter/filterSelectors.js';
import Button from 'components/Ui-Kit/Button';
import { privateFilter, publicFilter } from 'helpers/noticeFilter';
import { Navigation } from './FindPetFilter.styled';

const FindPetFilter = ({ page, setPage }) => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();
  const handleStatusFilterChange = value => {
    dispatch(setStatusFilter(value));
    if (page > 1) {
      setPage(1);
    }
  };
  const { isAuth } = useSelector(state => state.user);

  return (
    <>
      <Navigation>
        {publicFilter.map(({ status, filterId }) => (
          <Button
            key={filterId}
            name="filter"
            selected={filter === status}
            onClick={() => handleStatusFilterChange(status)}
          >
            <FormattedMessage id={filterId} />
          </Button>
        ))}
        {isAuth && (
          <>
            {privateFilter.map(({ status, filterId }) => (
              <Button
                key={filterId}
                name="filter"
                selected={filter === status}
                onClick={() => handleStatusFilterChange(status)}
              >
                <FormattedMessage id={filterId} />
              </Button>
            ))}
          </>
        )}
      </Navigation>
    </>
  );
};
FindPetFilter.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
};
export default FindPetFilter;
