import { noDataFallback } from 'constants/noDataFallback';
import { useIntl } from 'react-intl';
import { useGetNoticeByIdQuery } from 'redux/api/noticesApi';
import { useGetCategory } from './useGetCategory';

export const useGetNoticeInfo = id => {
  const { data, isFetching, isError, error } = useGetNoticeByIdQuery(id);
  const category = useGetCategory(data?.category);
  const { formatMessage } = useIntl();

  if (isFetching || isError) {
    return {
      noticeInfo: null,
      ownerInfo: null,
      isFetching,
      isError,
      error,
    };
  }

  const {
    name,
    birthDate,
    breed,
    location,
    sex,
    price,
    owner,
    title,
    photoURL,
    comments,
  } = data;

  const noticeInfo = [
    { field: formatMessage({ id: 'name' }), value: name },
    { field: formatMessage({ id: 'birthday' }), value: birthDate },
    { field: formatMessage({ id: 'breed' }), value: breed },
    {
      field: formatMessage({ id: 'location' }),
      value: location.split(',')[0],
    },
    { field: formatMessage({ id: 'sex' }), value: sex },
  ];

  if (category === 'sell') {
    noticeInfo.push({
      field: formatMessage({ id: 'price' }),
      value: `${price}$`,
    });
  }

  const ownerInfo = [
    { field: 'Email', value: owner.email, href: `mailto:${owner.email}` },
    {
      field: formatMessage({ id: 'phone' }),
      value: owner.phone,
      href: `tel:${owner.phone}`,
    },
  ];

  return {
    generalInfo: {
      title: title,
      photoURL: photoURL,
      category,
      comments: comments,
    },
    noticeInfo,
    ownerInfo,
    isFetching,
    isError,
    error,
  };
};
