export const breakpoints = ['320', '768', '1280'];

export const theme = {
  colors: {
    lightText: '#FFFFFF', // white
    mainText: '#111111', // black
    secondText: '#181C27', //black
    thirdText: '#111321', //black
    primaryText: '#535353', // grey text search
    secondaryText: 'rgba(17, 17, 17, 0.6)', // grey
    accent: '#F59256', // orange
    hover: '#db793d',
    mainBackground: '#FDF7F2', // light orange
    cardBackground: '#FFFFFF', // white
    secondaryBackground: 'rgba(255, 255, 255, 0.6)', //transparent white
    secondaryHover: 'rgba(255, 97, 1, 1)', //hover for button LearnMore
    borderColor: 'rgba(245, 146, 86, 0.5)',
    logoutColor: ' rgba(17, 17, 17, 0.6)',
    disabled: 'rgba(0, 0, 0, 0.1)',
  },

  space: [
    '0',
    '4px',
    '8px',
    '16px',
    '20px',
    '24px',
    '32px',
    '64px',
    '128px',
    '256px',
    '512px',
  ],

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
    xxxxs: '8px',
    xxxs: '12px',
    xxs: '14px',
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '28px',
    xxl: '32px',
    xxxl: '48px',
    xxxxl: '68px',
  },

  transitionTiming: '250ms cubic-bezier(0.4, 0, 0.2, 1)',

  breakpoints: [
    `${breakpoints[0]}px`,
    `${breakpoints[1]}px`,
    `${breakpoints[2]}px`,
  ],

  mq: {
    mobileOnly: `@media screen and (max-width: ${+breakpoints[1] - 0.02}px)`,
    tablet: `@media screen and (min-width: ${breakpoints[1]}px)`,
    tabletOnly: `@media screen and (min-width: ${
      breakpoints[1]
    }px) and (max-width: ${+breakpoints[2] - 0.02}px)`,
    desktop: `@media screen and (min-width: ${breakpoints[2]}px)`,
  },

  boxShadow: {
    main: '7px 4px 14px rgba(49, 21, 4, 0.07)',
    second: '7px 4px 14px rgba(0, 0, 0, 0.11)',
    notice: '0px 4px 4px rgba(0, 0, 0, 0.25)', //for card notice
  },
};
