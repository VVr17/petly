import { React } from 'react';
import PropTypes from 'prop-types';
import { TimeList, TimeItem, FriendText } from './FriendItem.styled';

const TimeTable = ({ shedule }) => {
  return (
    <TimeList>
      {shedule.map((item, idx) => (
        <TimeItem key={idx}>
          {item.isOpen ? (
            <FriendText>
              {item.day}:{item.from}-{item.to}
            </FriendText>
          ) : (
            <FriendText>{item.day}:Closed</FriendText>
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
