"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CONTENT } from "@/utils/content";

/**
 * LUMI EMERGENCE
 * Purpose: Emotional transition, narrative pivot
 *
 * Motion Strategy:
 * - Chaos from previous section dissolves
 * - Motion slows dramatically
 * - Focus locks to center
 * - LUMI appears as a single point of clarity
 * - This is the turning point of the story
 */

export default function LumiEmergence() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Dissolve chaos - opacity fades as we scroll into this section
  const chaosOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Center focus - scale grows as LUMI emerges
  const centerScale = useTransform(scrollYProgress, [0.2, 0.5], [0.5, 1]);
  const centerOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Glow intensity increases with scroll
  const glowIntensity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate LUMI text appearance
      ScrollTrigger.create({
        trigger: centerRef.current,
        start: "center center",
        onEnter: () => {
          gsap.from(".lumi-text", {
            scale: 0.8,
            opacity: 0,
            duration: 2.4,
            ease: "power4.out",
            stagger: 0.1,
          });

          gsap.from(".emergence-tagline", {
            y: 40,
            opacity: 0,
            duration: 1.6,
            ease: "power3.out",
            delay: 1,
          });
        },
      });

      // Pulsing glow effect
      gsap.to(".lumi-glow", {
        scale: 1.2,
        opacity: 0.6,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden bg-lumi-darker section-padding-lg"
    >
      {/* Dissolving chaos overlay */}
      <motion.div
        style={{ opacity: chaosOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-lumi-muted/50 blur-[80px]" />
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 bg-lumi-dark/50 blur-[60px]" />
      </motion.div>

      {/* Central emergence point */}
      <div
        ref={centerRef}
        className="relative h-screen flex items-center justify-center"
      >
        {/* Background glow that responds to scroll */}
        <motion.div
          style={{ opacity: glowIntensity }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="lumi-glow w-[600px] h-[600px] rounded-full bg-lumi-accent/20 blur-[150px]" />
        </motion.div>

        {/* LUMI emergence content */}
        <motion.div
          style={{ scale: centerScale, opacity: centerOpacity }}
          className="relative z-10 text-center px-6"
        >
          {/* Headline */}
          <h2 className="display-text text-4xl md:text-6xl lg:text-7xl text-lumi-light mb-8 md:mb-12">
            <span className="lumi-text inline-block">
              {STORY_CONTENT.emergence.headline.split(" ")[0]}
            </span>{" "}
            <span className="lumi-text inline-block text-lumi-glow">
              {STORY_CONTENT.emergence.headline.split(" ")[1]}
            </span>{" "}
            <span className="lumi-text inline-block">
              {STORY_CONTENT.emergence.headline.split(" ")[2]}
            </span>
          </h2>

          {/* Central LUMI symbol */}
          <motion.div
            className="flex items-center justify-center my-16 md:my-20"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 rounded-full border border-lumi-glow/30 animate-pulse-slow" />

              {/* Inner symbol */}
              <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-lumi-accent to-lumi-glow flex items-center justify-center">
                <span className="text-5xl md:text-6xl text-lumi-light font-light">
                  ◈
                </span>
              </div>
            </div>
          </motion.div>

          {/* Tagline */}
          <p className="emergence-tagline editorial-text text-xl md:text-2xl lg:text-3xl text-lumi-light/70 max-w-2xl mx-auto">
            {STORY_CONTENT.emergence.tagline}
          </p>
        </motion.div>
      </div>

      {/* Smooth transition gradient to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-lumi-dark to-transparent pointer-events-none" />
    </section>
  );
}
