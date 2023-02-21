const getAge = birthDate => {
    let today = new Date();
    let d = birthDate.split('.');
    let date = d[2] + '.' + d[1] + '.' + d[0];
    let birthDateFormat = new Date(date);
    let age = today.getFullYear() - birthDateFormat.getFullYear();
    let m = today.getMonth() - birthDateFormat.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < birthDateFormat.getDate())) {
      age--;
    }
    if (age === 0 && m < 0) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDateFormat.getDate())) {
        m--;
      }
    }

    return age ? age + ' ' + 'years' : m + ' ' + 'months';
  };

  export default getAge;