import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { statusFilter } from '../../redux/filter/filterConstans.js';
import { setStatusFilter } from '../../redux/filter/filterSlice.js';
import { selectStatusFilter } from '../../redux/filter/filterSelectors.js';
import Button from 'components/Ui-Kit/Button';
import { Navigation, NavComponent } from './FindPetFilter.styled';
import { FormattedMessage } from 'react-intl';

const FindPetFilter = () => {
  const filter = useSelector(selectStatusFilter);
  const dispatch = useDispatch();
  const handleStatusFilterChange = value => dispatch(setStatusFilter(value));
  const { isAuth } = useSelector(state => state.user);

  return (
    <Navigation>
      <Navigation>
        <Button
          name="filter"
          selected={filter === statusFilter.sell}
          onClick={() => handleStatusFilterChange(statusFilter.sell)}
        >
          <FormattedMessage id="sell" />
        </Button>
        <Button
          name="filter"
          selected={filter === statusFilter.lostAndFound}
          onClick={() => handleStatusFilterChange(statusFilter.lostAndFound)}
        >
          <FormattedMessage id="lostFound" />
        </Button>
        <Button
          name="filter"
          selected={filter === statusFilter.inGoodHands}
          onClick={() => handleStatusFilterChange(statusFilter.inGoodHands)}
        >
          <FormattedMessage id="goodHands" />
        </Button>
      </Navigation>

      {isAuth && (
        <Navigation>
          <Button
            name="filter"
            selected={filter === statusFilter.favoriteAds}
            onClick={() => handleStatusFilterChange(statusFilter.favoriteAds)}
          >
            <FormattedMessage id="favorite" />
          </Button>
          <Button
            name="filter"
            selected={filter === statusFilter.myAds}
            onClick={() => handleStatusFilterChange(statusFilter.myAds)}
          >
            <FormattedMessage id="myAds" />
          </Button>
        </Navigation>
      )}
    </Navigation>
  );
};
export default FindPetFilter;
