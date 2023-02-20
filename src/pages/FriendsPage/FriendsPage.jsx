import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useGetFriendsQuery } from 'redux/api/friendsApi';
import { newItems } from 'redux/api/friendsSlice';

import Section from 'components/Section';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import TitlePage from 'components/Ui-Kit/TitlePage';

const FriendsPage = () => {
  const dispatch = useDispatch();
  const { data = [], isFetching, isError } = useGetFriendsQuery();
  const newsItem = useSelector(state => state.items);

  useEffect(() => {
    if (!isFetching && data) {
      dispatch(newItems(data));
    }
  }, [newsItem, isFetching, data, dispatch]);

  return (
    <Section>
      <TitlePage name={'Our friends'} />
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isError && (
        <h2>Server error. Please, try again later.</h2>
      )}
      {!isFetching && !isError && <FriendsList friends={data} />}
    </Section>
  );
};

export default FriendsPage;
