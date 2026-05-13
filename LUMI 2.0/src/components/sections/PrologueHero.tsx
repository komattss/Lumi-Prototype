"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { STORY_CONTENT } from "@/utils/content";
import { MOTION_VARIANTS } from "@/utils/animations";

/**
 * PROLOGUE HERO
 * Purpose: Immersion, curiosity, emotional entry point
 *
 * Motion Strategy:
 * - Very slow background parallax creates depth
 * - Text fades and drifts in based on scroll position
 * - No aggressive movement, only gentle revelation
 * - Sets the tone for the entire narrative
 */

export default function PrologueHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax transforms based on scroll
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  useEffect(() => {
    // Cinematic entrance animation on mount
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-line", {
        y: 100,
        opacity: 0,
        duration: 1.8,
        ease: "power4.out",
        stagger: 0.3,
        delay: 0.5,
      });

      gsap.from(".hero-subtitle", {
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        delay: 2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-lumi-darker via-lumi-dark to-lumi-muted"
    >
      {/* Background gradient orb - subtle parallax */}
      <motion.div
        style={{ y }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="absolute w-[800px] h-[800px] rounded-full bg-lumi-accent/10 blur-[120px] animate-pulse-slow" />
      </motion.div>

      {/* Main content container */}
      <motion.div
        style={{ opacity }}
        className="relative h-full flex flex-col items-center justify-center px-6 md:px-12"
      >
        {/* Title with line breaks for dramatic pacing */}
        <div className="max-w-6xl text-center space-y-6 md:space-y-8">
          {STORY_CONTENT.prologue.title.map((line, index) => (
            <h1
              key={index}
              className="hero-title-line display-text text-5xl md:text-7xl lg:text-8xl text-lumi-light opacity-0"
            >
              {line}
            </h1>
          ))}
        </div>

        {/* Subtitle - appears after title */}
        <p className="hero-subtitle editorial-text mt-12 md:mt-16 text-lg md:text-xl text-lumi-light/60 max-w-2xl text-center opacity-0">
          {STORY_CONTENT.prologue.subtitle}
        </p>

        {/* Scroll indicator - subtle hint to explore */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs text-lumi-light/40 uppercase tracking-widest">
              Scroll to discover
            </span>
            <motion.div
              className="w-[1px] h-12 bg-gradient-to-b from-lumi-light/40 to-transparent"
              animate={{ scaleY: [1, 1.5, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-lumi-muted to-transparent pointer-events-none" />
    </section>
  );
}
