import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FriendTitle,
  FriendContentWrapper,
  FriendText,
  FriendTime,
  FriendListItem,
  FriendLink,
  TextWrapper,
  FriendImg,
  ImgWrapper,
  HoursOfWeek,
  HoursWrapper,
} from './FriendItem.styled.jsx';
import { getHours } from 'components/Friends/services';
import defaultImage from '../data/friend-default-image.png';

const NO_INFO_STRING = '---------------';

export const FriendItem = ({
  title,
  url,
  imageUrl,
  workDays,
  address,
  email,
  phone,
}) => {
  const [isHours, setIsHours] = useState(false);

  const handleClick = () => {
    setIsHours(!isHours);
  };

  const { hoursToday, hoursOfWeek } = getHours(workDays, NO_INFO_STRING);
  return (
    <FriendListItem>
      <FriendTitle>
        <FriendLink href={url}>{title}</FriendLink>
      </FriendTitle>
      <FriendContentWrapper>
        <ImgWrapper>
          <FriendImg
            src={imageUrl ?? defaultImage}
            alt={title}
            loading="lazy"
          />
        </ImgWrapper>
        <TextWrapper>
          <HoursWrapper>
            <FriendTime isHours={!!hoursOfWeek} onClick={() => handleClick()}>
              Time:
              <br />
              {hoursToday}
            </FriendTime>
            {hoursOfWeek && (
              <HoursOfWeek isOpen={isHours}>{hoursOfWeek}</HoursOfWeek>
            )}
          </HoursWrapper>
          <FriendText>
            Address:
            <br />
            {address ?? NO_INFO_STRING}
          </FriendText>
          <FriendText>
            Email:
            <br />
            {email ?? NO_INFO_STRING}
          </FriendText>
          <FriendText>
            Phone:
            <br />
            {phone ?? NO_INFO_STRING}
          </FriendText>
        </TextWrapper>
      </FriendContentWrapper>
    </FriendListItem>
  );
};

FriendItem.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  workDays: PropTypes.array,
  address: PropTypes.string,
  email: PropTypes.string,
  phone: PropTypes.string,
};
