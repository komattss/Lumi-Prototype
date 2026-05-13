"use client";

import { useEffect, useRef } from "react";

/**
 * Custom hook for detecting reduced motion preference
 * Respects user's system settings for accessibility
 */
export const useReducedMotion = () => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Hook for managing scroll position
 * Returns current scroll Y position
 */
export const useScrollPosition = () => {
  const scrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
};

/**
 * Hook for viewport detection
 * Returns boolean for mobile/tablet/desktop
 */
export const useViewport = () => {
  const isMobile =
    typeof window !== "undefined" ? window.innerWidth < 768 : false;
  const isTablet =
    typeof window !== "undefined"
      ? window.innerWidth >= 768 && window.innerWidth < 1024
      : false;
  const isDesktop =
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true;

  return { isMobile, isTablet, isDesktop };
};
