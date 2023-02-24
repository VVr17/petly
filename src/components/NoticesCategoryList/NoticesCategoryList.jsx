import React from 'react';
import PropTypes from 'prop-types';
import NoticeCategoryItem from './NoticeCategoryItem';
import { GalleryNotices } from './NoticesCategoryList.styled';
import { LayoutGroup } from 'framer-motion';
import { pageAnimation } from 'constants/animation';

const NoticesCategoryList = ({ notices }) => {
  return (
    <LayoutGroup>
      <GalleryNotices layout {...pageAnimation} transition={{ duration: 0.3 }}>
        {notices.map(notice => (
          <li key={notice._id}>
            <NoticeCategoryItem {...notice} />
          </li>
        ))}
      </GalleryNotices>
    </LayoutGroup>
  );
};

NoticesCategoryList.propTypes = {
  notices: PropTypes.array.isRequired,
};

export default NoticesCategoryList;
