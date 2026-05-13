"use client";

import { useEffect } from "react";

/**
 * Performance monitoring and optimization utilities
 */

/**
 * Hook to detect and warn about performance issues
 */
export const usePerformanceMonitoring = () => {
  useEffect(() => {
    // Monitor frame rate
    if (typeof window === "undefined") return;

    let lastFrameTime = performance.now();
    let frameCount = 0;
    let fps = 60;

    const measureFPS = () => {
      const now = performance.now();
      const delta = now - lastFrameTime;

      frameCount++;

      if (delta >= 1000) {
        fps = Math.round((frameCount * 1000) / delta);
        frameCount = 0;
        lastFrameTime = now;

        // Warn if FPS drops below 30
        if (fps < 30) {
          console.warn(`⚠️ Low FPS detected: ${fps}fps`);
        }
      }

      requestAnimationFrame(measureFPS);
    };

    const rafId = requestAnimationFrame(measureFPS);

    return () => cancelAnimationFrame(rafId);
  }, []);
};

/**
 * Lazy load images with Intersection Observer
 */
export const useLazyLoad = (ref: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;

            // Load images
            target.querySelectorAll("img[data-src]").forEach((img: any) => {
              img.src = img.dataset.src;
              img.removeAttribute("data-src");
            });

            observer.unobserve(target);
          }
        });
      },
      {
        rootMargin: "50px",
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref]);
};

/**
 * Detect reduced motion preference
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === "undefined") return false;

  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
};

/**
 * Throttle function for scroll events
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let lastCall = 0;

  return (...args: Parameters<T>) => {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      func(...args);
    }
  };
};

/**
 * Debounce function for resize events
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  delay: number
): ((...args: Parameters<T>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

/**
 * Preload critical assets
 */
export const preloadAssets = (urls: string[]) => {
  if (typeof window === "undefined") return;

  urls.forEach((url) => {
    const link = document.createElement("link");
    link.rel = "preload";

    if (url.match(/\.(jpg|jpeg|png|webp|gif)$/i)) {
      link.as = "image";
    } else if (url.match(/\.(woff|woff2|ttf|otf)$/i)) {
      link.as = "font";
      link.crossOrigin = "anonymous";
    }

    link.href = url;
    document.head.appendChild(link);
  });
};

/**
 * Check if device is mobile
 */
export const isMobileDevice = (): boolean => {
  if (typeof window === "undefined") return false;

  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * Get device pixel ratio for retina displays
 */
export const getDevicePixelRatio = (): number => {
  if (typeof window === "undefined") return 1;

  return window.devicePixelRatio || 1;
};
