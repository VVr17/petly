import { React } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import {
  TimeList,
  TimeItem,
  FriendText,
  HoursItemText,
} from './FriendItem.styled';

const TimeTable = ({ shedule }) => {
  return (
    <TimeList>
      {shedule.map((item, idx) => (
        <TimeItem key={idx}>
          {item.isOpen ? (
            <HoursItemText>
              {item.day}:{item.from}-{item.to}
            </HoursItemText>
          ) : (
            <HoursItemText>
              {item.day}:<FormattedMessage id="closed" />
            </HoursItemText>
          )}
        </TimeItem>
      ))}
    </TimeList>
  );
};

TimeTable.propTypes = {
  shedule: PropTypes.array,
};

export default TimeTable;
