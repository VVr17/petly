import React from 'react';
import { useSelector } from 'react-redux';
import NoticeCategoryItem from 'components/NoticeCategoryItem';
import { GalleryNotices } from './NoticesCategoryList.styled';

const NoticesCategoryList = () => {
  //   const petsByCategory = useSelector(selectPetsByCategory);

  const petsByCategory = [
    {
      title: 'dog  fbwehdwd qwdnwdw',
      photoURL:
        'https://cdn.pixabay.com/photo/2020/12/25/09/46/dog-5858985_960_720.jpg',
      name: 'Katze',
      breed: 'white',
      sex: 'male',
      birthDate: '01-07-2016',
      location: 'Kyiv',
      comments: 'tratratra',
      price: 3,
      owner: '63ef72821cc4f1db73258c9a',
      category: 'sell',
      favorite: false,
      _id: '63f0c5dbc349391aaa988bbe',
      createdAt: '2023-02-18T12:34:35.785Z',
      updatedAt: '2023-02-18T12:34:35.785Z',
    },
    {
      _id: '63f0c37fc110adbb5fe1a78a',
      title: 'cat',
      photoURL:
        'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_960_720.jpg',
      name: 'Vasyl',
      breed: 'white',
      sex: 'male',
      birthDate: '28-10-2022',
      location: 'Kyiv',
      comments: 'tratratra',
      owner: '63ef72821cc4f1db73258c9a',
      category: 'in-good-hands',
      favorite: false,
      createdAt: '2023-02-18T12:24:31.313Z',
      updatedAt: '2023-02-18T12:24:31.313Z',
    },
    {
      _id: '63f0c4c6c110adbb5fe1a78d',
      title: 'dog',
      photoURL:
        'https://cdn.pixabay.com/photo/2014/04/05/11/40/dog-316598_960_720.jpg',
      name: 'Maxl',
      breed: 'black',
      sex: 'male',
      birthDate: '12-05-2021',
      location: 'Kyiv',
      comments: 'tratratra',
      owner: '63ef72821cc4f1db73258c9a',
      category: 'in-good-hands',
      favorite: false,
      createdAt: '2023-02-18T12:29:58.233Z',
      updatedAt: '2023-02-18T12:29:58.233Z',
    },
  ];
  return (
    <GalleryNotices>
      {petsByCategory.map(petByCategory => (
        <NoticeCategoryItem key={petByCategory._id} {...petByCategory} />
      ))}
    </GalleryNotices>
  );
};

export default NoticesCategoryList;

/**
 *  const NoticesCategoryList = ({ category, IsFavoriteFilter }) 
 *   const noticesByCategory = useGetNoticeByCategoryQuery(category, {
    skip: !category,
  });
  const { isAuth } = useSelector(state => state.user);
  const favoriteNotices = useGetFavoriteQuery(null, {
    skip: !isAuth || !IsFavoriteFilter,
  });

 */
