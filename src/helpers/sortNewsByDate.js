import { convertDateToString } from './date';

export function sortArrayByDate(arr) {
  // map through array and convert date strings to Date objects
  const arrWithDateObjects = arr.map(obj => ({
    ...obj,
    date: new Date(obj.date.split('.').reverse().join('-')),
  }));

  // sort array based on the date property
  const sortedArr = arrWithDateObjects.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  );

  // map through sorted array and convert date objects back to date strings
  const sortedArrWithDateString = sortedArr.map(obj => ({
    ...obj,
    date: convertDateToString(obj.date),
  }));

  return sortedArrWithDateString;
}
