import React from 'react';
import { useGetNoticeByCategoryQuery } from 'redux/api/noticesApi';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import { GalleryNotices } from './NoticesCategoryList.styled';
import { useSelector } from 'react-redux';

const NoticesCategoryList = () => {
  const category = 'sell';
  const {
    data: noticesByCategory,
    error,
    isLoading,
  } = useGetNoticeByCategoryQuery(category, { skip: !category });
  const { isAuth } = useSelector(state => state.user);

  if (!noticesByCategory) return;
  const showNotices = noticesByCategory && !error && !isLoading;
  console.log(noticesByCategory);

  return (
    <GalleryNotices>
      {showNotices &&
        noticesByCategory.map(noticeByCategory => (
          <NoticeCategoryItem
            key={noticeByCategory._id}
            {...noticeByCategory}
          />
        ))}
    </GalleryNotices>
  );
};

export default NoticesCategoryList;
