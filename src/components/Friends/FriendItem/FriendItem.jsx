import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import defaultImage from 'assets/images/mobile/friend-default-image.png';
import { getNewWorkDays } from 'helpers/getNewWorkDays';
import TimeTable from './TimeTable';

import {
  FriendTitle,
  FriendContentWrapper,
  FriendText,
  FriendListItem,
  FriendLinkTitle,
  FriendLink,
  FriendTime,
  TextWrapper,
  FriendImg,
  FriendContentList,
  TimeBtn,
} from './FriendItem.styled';
import { noDataFallback } from 'constants/noDataFallback';

export const FriendItem = ({
  title,
  imageUrl,
  addressUrl,
  workDays,
  address,
  email,
  phone,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const newWorkDays = getNewWorkDays(workDays);

  return (
    <FriendListItem>
      <FriendTitle>
        <FriendLinkTitle href={addressUrl} target="_blank">
          {title}
        </FriendLinkTitle>
      </FriendTitle>

      <FriendContentWrapper>
        <FriendLink href={addressUrl} target="_blank">
          <FriendImg
            src={imageUrl ?? defaultImage}
            alt={title}
            loading="lazy"
          />
        </FriendLink>

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
            {!workDays ? (
              <>
                <FriendText>
                  <FormattedMessage id="time" />:
                </FriendText>
                <p>{noDataFallback}</p>
              </>
            ) : (
              <>
                {workDays[0] && workDays[0].isOpen ? (
                  <>
                    <FriendTime>
                      <FormattedMessage id="time" />:
                    </FriendTime>
                    <TimeBtn>
                      {workDays[0].from}-{workDays[0].to}
                    </TimeBtn>
                  </>
                ) : (
                  <>
                    <FriendTime>
                      <FormattedMessage id="time" />:
                    </FriendTime>
                    <TimeBtn>
                      <FormattedMessage id="closed" />
                    </TimeBtn>
                  </>
                )}
                {isVisible || <TimeTable shedule={newWorkDays} />}
              </>
            )}
          </TextWrapper>
          <TextWrapper>
            <FriendText>
              <FormattedMessage id="address" />:
            </FriendText>
            {addressUrl ? (
              <FriendLink href={addressUrl} target="_blank">
                {address}
              </FriendLink>
            ) : (
              <p>{noDataFallback}</p>
            )}
          </TextWrapper>

          <TextWrapper>
            <FriendText>Email:</FriendText>
            {email ? (
              <FriendLink href={`mailto:${email}`}>{email}</FriendLink>
            ) : (
              <p>{noDataFallback}</p>
            )}
          </TextWrapper>
          <TextWrapper>
            <FriendText>
              <FormattedMessage id="phone" />:
            </FriendText>
            {phone ? (
              <FriendLink href={`tel:${phone}`}>{phone}</FriendLink>
            ) : (
              <p>{noDataFallback}</p>
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
