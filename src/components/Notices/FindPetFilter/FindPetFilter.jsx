import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { setStatusFilter } from 'redux/filter/filterSlice.js';
import { selectStatusFilter } from 'redux/filter/filterSelectors.js';
import Button from 'components/Ui-Kit/Button';
import { Navigation } from './FindPetFilter.styled';
import { FormattedMessage } from 'react-intl';
import { privateFilter, publicFilter } from 'helpers/noticeFilter';

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
