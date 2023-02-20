import { React, useState } from 'react';
import PropTypes from 'prop-types';
import {
  FriendTitle,
  FriendContentWrapper,
  FriendText,
  FriendListItem,
  FriendLinkTitle,
  FriendLink,
  TextWrapper,
  FriendImg,
  FriendContentList,
  TimeBtn,
} from './FriendItem.styled.jsx';
import TimeTable from './TimeTable';
import defaultImage from '../data/friend-default-image.png';

export const FriendItem = ({
  title,
  url,
  imageUrl,
  addressUrl,
  workDays,
  address,
  email,
  phone,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const weekDays = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];
  const newWorkDays =
    workDays &&
    workDays.map((day, index) => {
      return { day: weekDays[index], ...day };
    });

  return (
    <FriendListItem>
      <FriendTitle>
        <FriendLinkTitle href={url} target="_blank">
          {title}
        </FriendLinkTitle>
      </FriendTitle>
      <FriendContentWrapper>
        <FriendImg src={imageUrl ?? defaultImage} alt={title} loading="lazy" />
        <FriendContentList>
          <TextWrapper
            onClick={() => {
              setIsVisible(!isVisible);
            }}
            onMouseLeave={() => {
              setTimeout(() => {
                setIsVisible(true);
              }, 3000);
            }}
          >
            {workDays === null || workDays === undefined ? (
              <>
                <FriendText>Time: </FriendText>
                <FriendText>------------</FriendText>
              </>
            ) : (
              <>
                {' '}
                {/* {workDays[0].isOpen ? (
                  <>
                    <FriendText>Time:</FriendText>
                    <Time>
                      {workDays[0].from}-{workDays[0].to}
                    </Time>
                  </>
                ) : ( */}
                <>
                  <FriendText>Time:</FriendText>
                  <TimeBtn>Closed</TimeBtn>
                </>
                {/* )} */}
                {isVisible || <TimeTable shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <FriendText>Address:</FriendText>
            {addressUrl ? (
              <FriendLink href={addressUrl} target="_blank">
                {address}
              </FriendLink>
            ) : (
              <FriendText>------------</FriendText>
            )}
          </TextWrapper>

          <TextWrapper>
            <FriendText>Email:</FriendText>
            {email ? (
              <FriendLink href={`mailto:${email}`}>{email}</FriendLink>
            ) : (
              <FriendText>------------</FriendText>
            )}
          </TextWrapper>
          <TextWrapper>
            <FriendText>Phone:</FriendText>
            {phone ? (
              <FriendLink href={`tel:${phone}`}>{phone}</FriendLink>
            ) : (
              <FriendText>------------</FriendText>
            )}
          </TextWrapper>
        </FriendContentList>
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
  addressUrl: PropTypes.string,
};

export default FriendItem;
