import React from 'react';
import { Link } from 'react-router-dom';

const NotificationAddNotice = () => {
  return (
    <div>
      Please, <Link to="/register">register</Link> or{' '}
      <Link Link to="/login">
        login
      </Link>{' '}
      to add notice
    </div>
  );
};
export default NotificationAddNotice;
