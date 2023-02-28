export const truncateString = str => {
  if (str.length > 38) {
    if (str.charAt(37) === ' ') {
      return str.slice(0, 38) + '...';
    } else {
      return str.slice(0, str.lastIndexOf(' ', 38)) + '...';
    }
  } else {
    return str;
  }
};
