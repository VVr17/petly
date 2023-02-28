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
    data: noticesData,
    error: noticeError,
    isFetching: fetchingNotices,
  } = useGetNoticeByCategoryQuery(category, {
    skip:
      !category ||
      category === statusFilter.favoriteAds ||
      category === statusFilter.myAds,
  });
  const {
    data: favoriteNoticesData,
    error: favoriteError,
    isFetching: fetchingFavorites,
  } = useGetFavoritesNoticesQuery(null, {
    skip: category !== statusFilter.favoriteAds,
  });
  const {
    data: myNoticesData,
    error: myError,
    isFetching: fetchingMy,
  } = useGetUserNoticesQuery(null, {
    skip: category !== statusFilter.myAds,
  });

  if (category === statusFilter.favoriteAds) {
    return {
      notices: favoriteNoticesData?.data,
      totalItems: favoriteNoticesData?.totalItems,
      isFetching: fetchingFavorites,
      error: favoriteError,
    };
  }
  if (category === statusFilter.myAds) {
    return {
      notices: myNoticesData?.data,
      isFetching: fetchingMy,
      error: myError,
      totalItems: myNoticesData?.totalItems,
    };
  }
  return {
    notices: noticesData?.data,
    isFetching: fetchingNotices,
    error: noticeError,
    totalItems: noticesData?.totalItems,
  };
};
