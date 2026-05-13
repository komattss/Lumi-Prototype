/**
 * Type definitions for the LUMI project
 */

export interface AnimationConfig {
  easing: {
    smooth: number[]
    entrance: number[]
    exit: number[]
    elastic: number[]
  }
  duration: {
    fast: number
    normal: number
    slow: number
    verySlow: number
  }
  parallax: {
    slowest: number
    slow: number
    normal: number
    fast: number
  }
  scrollTrigger: {
    start: string
    end: string
    scrub: number
  }
}

export interface StorySection {
  title?: string | string[]
  subtitle?: string
  headline?: string
  tagline?: string
  description?: string
  fragments?: string[]
  themes?: Theme[]
  principles?: string[]
  vision?: string
  subtext?: string
  primaryCTA?: string
  secondaryCTA?: string
}

export interface Theme {
  title: string
  description: string
  icon: string
}

export interface MotionVariant {
  hidden: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    filter?: string
  }
  visible: {
    opacity?: number
    y?: number
    x?: number
    scale?: number
    filter?: string
    transition?: {
      duration?: number
      ease?: number[] | string
      delay?: number
      staggerChildren?: number
      delayChildren?: number
    }
  }
}

export interface ScrollProgress {
  scrollYProgress: any // MotionValue from framer-motion
}

export interface SectionProps {
  className?: string
}
