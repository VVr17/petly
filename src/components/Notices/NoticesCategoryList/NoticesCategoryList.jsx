import React from 'react';
import PropTypes from 'prop-types';
import { LayoutGroup } from 'framer-motion';
import NoticeCategoryItem from './NoticeCategoryItem';
import { pageAnimation } from 'constants/animation';
import { GalleryNotices } from './NoticesCategoryList.styled';

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
