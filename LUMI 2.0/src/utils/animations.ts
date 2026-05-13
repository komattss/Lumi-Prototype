/**
 * Animation configuration constants
 * These values create the cinematic, calm motion profile for LUMI
 */

export const ANIMATION_CONFIG = {
  // Base easing curves for organic motion
  easing: {
    smooth: [0.25, 0.1, 0.25, 1],
    entrance: [0.16, 1, 0.3, 1],
    exit: [0.7, 0, 0.84, 0],
    elastic: [0.68, -0.55, 0.265, 1.55],
  },

  // Duration standards (in seconds)
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2.4,
  },

  // Parallax speed multipliers
  parallax: {
    slowest: 0.2, // Background elements
    slow: 0.4, // Mid-ground
    normal: 0.6, // Standard parallax
    fast: 0.8, // Foreground
  },

  // Scroll trigger thresholds
  scrollTrigger: {
    start: "top 80%", // Animation starts when element is 80% in viewport
    end: "bottom 20%", // Animation ends when element is 20% above viewport
    scrub: 1, // Smooth scrubbing effect
  },
};

/**
 * Framer Motion variants for common animation patterns
 */
export const MOTION_VARIANTS = {
  // Fade in with upward drift
  fadeInUp: {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },

  // Fade in from left (for narrative progression)
  fadeInLeft: {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  },

  // Scale and fade (for emergence moments)
  scaleIn: {
    hidden: {
      opacity: 0,
      scale: 0.85,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.4,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },

  // Stagger children animations
  staggerContainer: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  },

  // Blur in effect (for world before LUMI)
  blurIn: {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {
        duration: 1.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  },
};

/**
 * Utility: Calculate parallax offset based on scroll position
 */
export const calculateParallax = (
  scrollY: number,
  speed: number,
  offset: number = 0
): number => {
  return scrollY * speed + offset;
};

/**
 * Utility: Check if element is in viewport
 */
export const isInViewport = (element: HTMLElement): boolean => {
  if (!element) return false;

  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
