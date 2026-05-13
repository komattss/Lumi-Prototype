"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CONTENT } from "@/utils/content";

/**
 * LUMI EVOLUTION
 * Purpose: Show LUMI's core themes through sequential reveals
 *
 * Motion Strategy:
 * - One idea per section, revealed as you scroll
 * - Sequential scroll-triggered reveals with directional variation
 * - Calm, confident pacing - no rushing
 * - Each theme gets breathing room and attention
 */

export default function LumiEvolution() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger the theme cards as they enter viewport
      const themes = gsap.utils.toArray(".theme-card");

      themes.forEach((theme: any, index) => {
        // Alternate direction for visual interest
        const xStart = index % 2 === 0 ? -80 : 80;

        ScrollTrigger.create({
          trigger: theme,
          start: "top 75%",
          onEnter: () => {
            gsap.from(theme, {
              x: xStart,
              opacity: 0,
              duration: 1.4,
              ease: "power3.out",
            });
          },
        });
      });

      // Headline reveal
      ScrollTrigger.create({
        trigger: ".evolution-headline",
        start: "top 70%",
        onEnter: () => {
          gsap.from(".evolution-headline", {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-lumi-dark to-lumi-muted section-padding-lg"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Section headline */}
        <h2 className="evolution-headline display-text text-4xl md:text-6xl lg:text-7xl text-lumi-light mb-20 md:mb-32 text-center">
          {STORY_CONTENT.evolution.headline}
        </h2>

        {/* Theme cards - each represents a core LUMI principle */}
        <div className="space-y-32 md:space-y-40">
          {STORY_CONTENT.evolution.themes.map((theme, index) => (
            <motion.div
              key={theme.title}
              className="theme-card relative"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-12 md:gap-16 items-center`}
              >
                {/* Icon/Symbol side */}
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-to-br from-lumi-accent/20 to-lumi-glow/20 backdrop-blur-sm border border-lumi-accent/30 flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span className="text-6xl md:text-7xl">{theme.icon}</span>
                  </motion.div>
                </div>

                {/* Content side */}
                <div
                  className={`flex-1 ${
                    index % 2 === 0 ? "md:text-left" : "md:text-right"
                  } text-center`}
                >
                  <h3 className="display-text text-3xl md:text-4xl lg:text-5xl text-lumi-light mb-6">
                    {theme.title}
                  </h3>
                  <p className="editorial-text text-lg md:text-xl lg:text-2xl text-lumi-light/70 max-w-xl">
                    {theme.description}
                  </p>
                </div>
              </div>

              {/* Connecting line (except for last item) */}
              {index < STORY_CONTENT.evolution.themes.length - 1 && (
                <motion.div
                  className="absolute left-1/2 -translate-x-1/2 w-[1px] h-20 md:h-24 mt-16 bg-gradient-to-b from-lumi-accent/50 to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background ambient elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-lumi-accent/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-lumi-glow/5 blur-[100px] pointer-events-none" />
    </section>
  );
}
