import { statusFilter } from 'redux/filter/filterConstans';

export const publicFilter = [
  { status: statusFilter.sell, filterId: 'sell' },
  { status: statusFilter.lostAndFound, filterId: 'lostFound' },
  { status: statusFilter.inGoodHands, filterId: 'goodHands' },
];

export const privateFilter = [
  { status: statusFilter.favoriteAds, filterId: 'favorite' },
  { status: statusFilter.myAds, filterId: 'myAds' },
];
