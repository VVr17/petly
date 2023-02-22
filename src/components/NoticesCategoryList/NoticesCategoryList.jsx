import React from 'react';
import PropTypes from 'prop-types';
import NoticeCategoryItem from './NoticeCategoryItem';
import { GalleryNotices } from './NoticesCategoryList.styled';

const NoticesCategoryList = ({ notices }) => {
  return (
    <GalleryNotices>      
      {notices.map(notice => (
        <NoticeCategoryItem key={notice._id} {...notice} />
      ))}      
    </GalleryNotices>
  );
};

NoticesCategoryList.propTypes = {
  notices: PropTypes.array.isRequired,  
};

export default NoticesCategoryList;
