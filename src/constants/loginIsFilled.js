export const getLoginFilled = path => {
  return (
    path === '/news' ||
    path === '/notices' ||
    path === '/friends' ||
    path === '/'
  );
};
