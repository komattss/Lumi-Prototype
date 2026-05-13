"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CONTENT } from "@/utils/content";

/**
 * HUMAN × LUMI
 * Purpose: Show technology serving humans, not overwhelming them
 *
 * Motion Strategy:
 * - Depth created via foreground/mid/background parallax layers
 * - Gentle, breathing motion - nothing aggressive
 * - Human-centered visuals with calm UI
 * - Generous breathing space between elements
 */

export default function HumanAndLumi() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Subtle parallax layers for depth (slower = further back)
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yMidground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      ScrollTrigger.create({
        trigger: ".human-headline",
        start: "top 70%",
        onEnter: () => {
          gsap.from(".human-headline", {
            y: 60,
            opacity: 0,
            duration: 1.4,
            ease: "power3.out",
          });
        },
      });

      // Description reveal
      ScrollTrigger.create({
        trigger: ".human-description",
        start: "top 75%",
        onEnter: () => {
          gsap.from(".human-description", {
            y: 40,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.3,
          });
        },
      });

      // Principles stagger in
      gsap.from(".principle-item", {
        scrollTrigger: {
          trigger: ".principles-container",
          start: "top 70%",
        },
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-lumi-muted to-lumi-dark section-padding-lg"
    >
      {/* Background layer - ambient glow */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-lumi-accent/10 blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-lumi-glow/10 blur-[130px]" />
      </motion.div>

      {/* Midground - content container */}
      <motion.div
        style={{ y: yMidground }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12"
      >
        {/* Headline */}
        <h2 className="human-headline display-text text-4xl md:text-6xl lg:text-7xl text-lumi-light mb-12 md:mb-16 text-center">
          {STORY_CONTENT.humanLumi.headline}
        </h2>

        {/* Description */}
        <p className="human-description editorial-text text-xl md:text-2xl lg:text-3xl text-lumi-light/70 text-center max-w-3xl mx-auto mb-20 md:mb-32">
          {STORY_CONTENT.humanLumi.description}
        </p>

        {/* Visual metaphor - breathing space between layers */}
        <div className="relative h-64 md:h-80 mb-20 md:mb-32">
          {/* Back layer */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-lumi-muted/30 backdrop-blur-sm border border-lumi-light/5"
            style={{ y: yBackground }}
            animate={{
              scale: [1, 1.02, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Middle layer */}
          <motion.div
            className="absolute inset-8 md:inset-12 rounded-2xl bg-lumi-muted/50 backdrop-blur-md border border-lumi-light/10"
            style={{ y: yMidground }}
            animate={{
              scale: [1, 1.01, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          />

          {/* Front layer */}
          <motion.div
            className="absolute inset-16 md:inset-20 rounded-xl bg-lumi-accent/20 backdrop-blur-lg border border-lumi-accent/30 flex items-center justify-center"
            style={{ y: yForeground }}
          >
            <span className="text-4xl md:text-5xl text-lumi-glow">◈</span>
          </motion.div>
        </div>

        {/* Core principles */}
        <div className="principles-container space-y-8 md:space-y-10">
          {STORY_CONTENT.humanLumi.principles.map((principle, index) => (
            <motion.div
              key={principle}
              className="principle-item flex items-center justify-center gap-4"
              whileHover={{ x: 10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-2 h-2 rounded-full bg-lumi-accent" />
              <p className="text-xl md:text-2xl text-lumi-light/80 font-light">
                {principle}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Foreground accent elements */}
      <motion.div
        style={{ y: yForeground }}
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-lumi-accent/5 blur-[60px] pointer-events-none"
      />
      <motion.div
        style={{ y: yForeground }}
        className="absolute top-40 right-10 w-24 h-24 rounded-full bg-lumi-glow/5 blur-[50px] pointer-events-none"
      />
    </section>
  );
}
