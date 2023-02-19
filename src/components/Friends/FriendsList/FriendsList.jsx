import { React, useEffect, useState } from 'react';
import { FriendsUl } from './FriendsList.styled.jsx';
import { FriendItem } from '../FriendItem/FriendItem';
import JSONfriends from '../data/friends';

const FriendsList = () => {
  return (
    <FriendsUl>
      {JSONfriends.map(friend => (
        <FriendItem key={friend._id} {...friend} />
      ))}
    </FriendsUl>
  );
};

export default FriendsList;
