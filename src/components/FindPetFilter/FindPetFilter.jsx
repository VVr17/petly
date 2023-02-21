import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { statusFilter } from '../../redux/filter/filterConstans.js';
import { setStatusFilter } from '../../redux/filter/filterSlice.js';
import { selectStatusFilter } from '../../redux/filter/userSelectors.js';
import Button from 'components/Ui-Kit/Button';
import { Navigation, NavComponent } from './FindPetFilter.styled';

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
          sell
        </Button>
        <Button
          name="filter"
          selected={filter === statusFilter.lostAndFound}
          onClick={() => handleStatusFilterChange(statusFilter.lostAndFound)}
        >
          lost/found
        </Button>
        <Button
          name="filter"
          selected={filter === statusFilter.inGoodHands}
          onClick={() => handleStatusFilterChange(statusFilter.inGoodHands)}
        >
          in good hands
        </Button>
      </Navigation>

      {isAuth && (
        <Navigation>
          <Button
            name="filter"
            selected={filter === statusFilter.favoriteAds}
            onClick={() => handleStatusFilterChange(statusFilter.favoriteAds)}
          >
            favorite ads
          </Button>
          <Button
            name="filter"
            selected={filter === statusFilter.myAds}
            onClick={() => handleStatusFilterChange(statusFilter.myAds)}
          >
            my ads
          </Button>
        </Navigation>
      )}
    </Navigation>
  );
};
export default FindPetFilter;
