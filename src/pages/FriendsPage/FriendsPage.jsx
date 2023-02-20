import { React } from 'react';
import { useGetFriendsQuery } from 'redux/api/friendsApi';

import Section from 'components/Section';
import FriendsList from 'components/Friends/FriendsList/FriendsList';
import TitlePage from 'components/Ui-Kit/TitlePage';

const FriendsPage = () => {
  const { data, isFetching, isError } = useGetFriendsQuery();

  return (
    <Section>
      <TitlePage name={'Our friends'} />
      {isFetching && <h2>Loading...</h2>}
      {!isFetching && isError && (
        <h2>Server error. Please, try again later.</h2>
      )}
      {!isFetching && !isError && <FriendsList friends={data.data} />}
    </Section>
  );
};

export default FriendsPage;
