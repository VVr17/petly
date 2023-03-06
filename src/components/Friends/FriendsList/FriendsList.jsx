import { React } from 'react';
import { FriendsUl } from './FriendsList.styled.jsx';
import { FriendItem } from '../FriendItem/FriendItem';
import { useGetFriendsQuery } from 'redux/api/friendsApi.js';

const FriendsList = () => {
  const { data: friends } = useGetFriendsQuery();

  return (
    <FriendsUl>
      {friends &&
        friends.map(
          ({
            title,
            url,
            addressUrl,
            imageUrl,
            address,
            workDays,
            phone,
            email,
          }) => (
            <FriendItem
              key={title}
              title={title}
              siteUrl={url}
              addressUrl={addressUrl}
              imageUrl={imageUrl}
              address={address}
              workDays={workDays}
              phone={phone}
              email={email}
            />
          )
        )}
    </FriendsUl>
  );
};

export default FriendsList;
