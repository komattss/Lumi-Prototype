"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CONTENT } from "@/utils/content";

/**
 * FUTURE VISION
 * Purpose: Expansion, possibility, long-term vision
 *
 * Motion Strategy:
 * - Very restrained motion - less is more here
 * - Slow fades and gentle transitions
 * - Bright, open, spacious design
 * - Minimal elements to convey infinite possibility
 * - Color palette shifts toward light and hope
 */

export default function FutureVision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline entrance
      ScrollTrigger.create({
        trigger: ".future-headline",
        start: "top 70%",
        onEnter: () => {
          gsap.from(".future-headline", {
            y: 80,
            opacity: 0,
            duration: 2,
            ease: "power4.out",
          });
        },
      });

      // Vision text reveals slowly
      ScrollTrigger.create({
        trigger: ".future-vision-text",
        start: "top 75%",
        onEnter: () => {
          gsap.from(".future-vision-text", {
            y: 60,
            opacity: 0,
            duration: 1.8,
            ease: "power3.out",
            delay: 0.4,
          });
        },
      });

      // Subtext fades in last
      ScrollTrigger.create({
        trigger: ".future-subtext",
        start: "top 80%",
        onEnter: () => {
          gsap.from(".future-subtext", {
            opacity: 0,
            duration: 2,
            ease: "power2.out",
            delay: 0.8,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-lumi-dark via-lumi-muted to-lumi-light/10 section-padding-lg"
    >
      {/* Bright ambient background - suggests dawn/new beginning */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-lumi-accent/20 via-lumi-glow/10 to-transparent blur-[100px]" />
      </div>

      {/* Main content - centered and spacious */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center space-y-16 md:space-y-24">
          {/* Headline */}
          <h2 className="future-headline display-text text-5xl md:text-7xl lg:text-8xl text-lumi-light">
            {STORY_CONTENT.future.headline}
          </h2>

          {/* Central visual element - minimal and symbolic */}
          <motion.div
            className="flex items-center justify-center my-20 md:my-32"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="relative">
              {/* Expanding rings - suggest growth and possibility */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-lumi-glow/20"
                  style={{
                    width: 100 + i * 80,
                    height: 100 + i * 80,
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}

              {/* Center point */}
              <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-lumi-accent to-lumi-glow flex items-center justify-center">
                <motion.div
                  animate={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <span className="text-4xl md:text-5xl text-lumi-light">
                    ✦
                  </span>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Vision statement */}
          <p className="future-vision-text editorial-text text-2xl md:text-3xl lg:text-4xl text-lumi-light/80 max-w-3xl mx-auto leading-relaxed">
            {STORY_CONTENT.future.vision}
          </p>

          {/* Subtext */}
          <p className="future-subtext text-lg md:text-xl text-lumi-light/50 font-light">
            {STORY_CONTENT.future.subtext}
          </p>
        </div>
      </div>

      {/* Gradient transition to CTA section */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-lumi-darker to-transparent pointer-events-none" />
    </section>
  );
}
