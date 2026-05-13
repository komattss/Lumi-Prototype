// Standardized easing curve for all animations - calm and natural
const EASE = [0.25, 0.1, 0.25, 1.0]; // ease-in-out-cubic
const DURATION = 0.4;
const STAGGER_DELAY = 0.08;

// Base fade-in animation - used for most content entrances
export const fadeInUp = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
  transition: { duration: DURATION, ease: EASE },
};

// Simple fade for subtle transitions
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: DURATION, ease: EASE },
};

// Stagger container for sequential reveals
export const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: STAGGER_DELAY,
      ease: EASE,
    },
  },
};

// Stagger item - pairs with staggerContainer
export const staggerItem = {
  hidden: { y: 12, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: DURATION, ease: EASE },
  },
};

// Smooth scale for interactive elements
export const scaleIn = {
  initial: { scale: 0.96, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.96, opacity: 0 },
  transition: { duration: DURATION, ease: EASE },
};

// Collapse/expand animation
export const collapse = {
  hidden: { height: 0, opacity: 0 },
  show: {
    height: "auto",
    opacity: 1,
    transition: { duration: DURATION, ease: EASE },
  },
};

// Rotate animation for chevrons and icons
export const rotate = {
  expanded: { rotate: 180 },
  collapsed: { rotate: 0 },
  transition: { duration: DURATION, ease: EASE },
};
