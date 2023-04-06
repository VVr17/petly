import { weekDays } from 'constants/weekdays';

export const getNewWorkDays = workDays => {
  return workDays
    ? workDays.map((day, index) => ({ day: weekDays[index], ...day }))
    : null;
};
