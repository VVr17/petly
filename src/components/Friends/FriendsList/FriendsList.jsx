import { React } from 'react';
import PropTypes from 'prop-types';
import { FriendsUl } from './FriendsList.styled.jsx';
import { FriendItem } from '../FriendItem/FriendItem';
// import JSONfriends from '../data/friends';

const FriendsList = ({ friends }) => {
  return (
    <FriendsUl>
      {friends.data.map(
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

FriendsList.propTypes = {
  friends: PropTypes.object,
};

export default FriendsList;
