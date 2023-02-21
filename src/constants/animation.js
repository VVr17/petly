const pageAnimationType = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export const pageAnimation = {
  variants: pageAnimationType,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
};

const mobileAnimationType = {
  hidden: { opacity: 0, translateX: '-100px' },
  show: { opacity: 1, translateX: 0 },
};

export const mobileMenuAnimation = {
  variants: mobileAnimationType,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
};

const popUpAnimationType = {
  hidden: { opacity: 0, scale: 0.5 },
  show: { opacity: 1, scale: 1 },
};

export const popUpMenuAnimation = {
  variants: popUpAnimationType,
  initial: 'hidden',
  animate: 'show',
  exit: 'hidden',
};
