import { useIntl } from 'react-intl';

export const useGetCategory = category => {
  const { formatMessage } = useIntl();

  switch (category) {
    case 'sell':
      return formatMessage({ id: 'sell' });
    case 'in-good-hands':
      return formatMessage({ id: 'goodHands' });
    case 'lost-found':
      return formatMessage({ id: 'lostFound' });
    default:
      return formatMessage({ id: 'noCategory' });
  }
};
