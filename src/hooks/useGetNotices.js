import { useSelector } from 'react-redux';
import {
  useGetFavoritesNoticesQuery,
  useGetNoticeByCategoryQuery,
  useGetUserNoticesQuery,
} from 'redux/api/noticesApi';
import { statusFilter } from 'redux/filter/filterConstans';
import { selectStatusFilter } from 'redux/filter/filterSelectors';

export const useGetNotices = ({ filter, page }) => {
  const category = useSelector(selectStatusFilter);
  const {
    data: noticesData,
    error: noticeError,
    isFetching: fetchingNotices,
  } = useGetNoticeByCategoryQuery(
    { categoryName: category, search: filter, page },
    {
      skip:
        !category ||
        category === statusFilter.favoriteAds ||
        category === statusFilter.myAds,
    }
  );

  const {
    data: favoriteNoticesData,
    error: favoriteError,
    isFetching: fetchingFavorites,
  } = useGetFavoritesNoticesQuery(
    { search: filter, page },
    {
      skip: category !== statusFilter.favoriteAds,
    }
  );
  const {
    data: myNoticesData,
    error: myError,
    isFetching: fetchingMy,
  } = useGetUserNoticesQuery(
    { search: filter, page },
    {
      skip: category !== statusFilter.myAds,
    }
  );

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
