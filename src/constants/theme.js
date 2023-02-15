export const breakpoints = ['320', '768', '1280'];

export const theme = {
  colors: {
    lightText: '#FFFFFF', // white
    mainText: '#111111', // black
    secondaryText: 'rgba(17, 17, 17, 0.6)', // grey
    accent: '#F59256', // orange
    mainBackground: '#FDF7F2', // light orange
    cardBackground: '#FFFFFF', // white
  },

  space: ['0', '4px', '8px', '16px', '32px', '64px', '128px', '256px', '512px'],

  fontFamily: {
    manrope: "'Manrope', sans-serif",
    inter: "'Inter', sans-serif",
    montserrat: "'Montserrat', sans-serif",
    poppins: "'Poppins', sans-serif",
  },

  fontWeight: {
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
  },

  fontSizes: {
    xxs: '12px',
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '28px',
    xxl: '48px',
    xxxl: '68px',
  },

  transitionTiming: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  mq: {
    mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints[1]
    }px) and (max-width: ${+breakpoints[2] - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },

  boxShadow: '0px 6px 16px -10px rgba(56, 54, 52, 0.08)',
};
