import React from 'react';
import { HoursItem } from '../FriendItem/FriendItem.styled';

export const getHours = (workDays, NO_INFO_STRING) => {
  const hoursToString = ({ from, to }) => from.concat('-', to);

  const getHoursOnDaysOfWeek = workDays => {
    if (!workDays || !workDays.length) return null;

    const DAYS = ['MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

    return (
      <>
        {DAYS.map((day, idx) => (
          <HoursItem key={idx}>
            <p>{day}</p>
            <p>
              {!workDays || !workDays[idx].isOpen
                ? NO_INFO_STRING
                : hoursToString(workDays[idx])}
            </p>
          </HoursItem>
        ))}
        ;
      </>
    );
  };

  const getHoursToday = workDays => {
    if (!workDays || !workDays.length) {
      return null;
    }
    const numberOfDay = new Date().getDay();
    const workToDay = workDays[!numberOfDay ? 6 : numberOfDay - 1];
    const hoursToday = !workToDay.isOpen
      ? null
      : workToDay.from.concat('-', workToDay.to);

    return hoursToday;
  };

  return {
    hoursToday: getHoursToday(workDays) || NO_INFO_STRING,
    hoursOfWeek: getHoursOnDaysOfWeek(workDays),
  };
};
