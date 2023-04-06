import { React } from 'react';
import { useGetFriendsQuery } from 'redux/api/friendsApi';
import { useIntl } from 'react-intl';
import { FormattedMessage } from 'react-intl';

import FriendsList from 'components/Friends/FriendsList';
import Loader from 'components/Loader/loader';
import Section from 'components/Section';
import TitlePage from 'components/Ui-Kit/TitlePage';

const FriendsPage = () => {
  const { data, isFetching, isError } = useGetFriendsQuery();
  const { formatMessage } = useIntl();

  return (
    <Section>
      <TitlePage name={formatMessage({ id: 'ourFriends' })} />
      {isFetching && <Loader />}
      {!isFetching && isError && (
        <h2>
          <FormattedMessage id="errorServer" />
        </h2>
      )}
      {!isFetching && !isError && <FriendsList />}
    </Section>
  );
};

export default FriendsPage;
