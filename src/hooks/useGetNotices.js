import { useSelector } from 'react-redux';
import {
  useGetFavoritesNoticesQuery,
  useGetNoticeByCategoryQuery,
  useGetUserNoticesQuery,
} from 'redux/api/noticesApi';
import { statusFilter } from 'redux/filter/filterConstans';
import { selectStatusFilter } from 'redux/filter/filterSelectors';

export const useGetNotices = () => {
  const category = useSelector(selectStatusFilter);
  const {
    data: notices,
    error: noticeError,
    isFetching: fetchingNotices,
  } = useGetNoticeByCategoryQuery(category, {
    skip:
      !category ||
      category === statusFilter.favoriteAds ||
      category === statusFilter.myAds,
  });
  const {
    data: favoriteNotices,
    error: favoriteError,
    isFetching: fetchingFavorites,
  } = useGetFavoritesNoticesQuery(null, {
    skip: category !== statusFilter.favoriteAds,
  });
  const {
    data: myNotices,
    error: myError,
    isFetching: fetchingMy,
  } = useGetUserNoticesQuery(null, {
    skip: category !== statusFilter.myAds,
  });

  if (category === statusFilter.favoriteAds) {
    return {
      notices: favoriteNotices,
      isFetching: fetchingFavorites,
      error: favoriteError,
    };
  }
  if (category === statusFilter.myAds) {
    return {
      notices: myNotices,
      isFetching: fetchingMy,
      error: myError,
    };
  }
  return {
    notices,
    isFetching: fetchingNotices,
    error: noticeError,
  };
};
