const getAge = birthDate => {
  let today = new Date();
  let d = birthDate.split('.');

  let year = today.getFullYear() - d[2];
  let month = today.getMonth() - d[1] + 1;
  let day = today.getDate() - d[0];

  if (year === 0 && month === 0 && day > 0) {
    return day + ' ' + 'day';
  }
  if (year === 0 && month > 0) {
    return month + ' ' + 'months';
  }

  if (year === 1 && month < 0) {
    month = 12 + month;
    return month + ' ' + 'months';
  }
  if (year >= 1 && month > 0) {
    return year + ' ' + 'years' + ' ' + month + ' ' + 'months';
  }
  if (year >= 1 && month < 0) {
    year = year - 1;
    month = 12 + month;
    return year + ' ' + 'years' + ' ' + month + ' ' + 'months';
  }
  if (year >= 1 && month === 0) {
    return year + ' ' + 'years';
  }
};

export default getAge;
