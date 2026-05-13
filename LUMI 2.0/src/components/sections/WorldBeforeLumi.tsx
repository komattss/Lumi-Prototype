"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CONTENT } from "@/utils/content";

/**
 * WORLD BEFORE LUMI
 * Purpose: Represent complexity and digital overload
 *
 * Motion Strategy:
 * - Multiple parallax layers at different speeds create disorientation
 * - Fragmented text pieces drift chaotically
 * - Darker, muted palette conveys the problem state
 * - Controlled chaos that feels intentional, not broken
 */

export default function WorldBeforeLumi() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Different parallax speeds for layered depth
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const yMidground = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const yForeground = useTransform(scrollYProgress, [0, 1], ["0%", "70%"]);
  const fragmentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate fragments with chaotic but controlled motion
      gsap.to(".fragment", {
        y: "random(-50, 50)",
        x: "random(-30, 30)",
        rotation: "random(-5, 5)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      // Main headline reveal
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        onEnter: () => {
          gsap.from(".world-headline", {
            y: 80,
            opacity: 0,
            duration: 1.4,
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
      className="relative min-h-screen w-full overflow-hidden bg-lumi-dark section-padding"
    >
      {/* Background layer - slowest movement */}
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-lumi-muted blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-lumi-dark blur-[100px]" />
      </motion.div>

      {/* Fragmented text layer - represents information overload */}
      <motion.div
        style={{ y: yMidground, opacity: fragmentOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        {STORY_CONTENT.worldBefore.fragments.map((fragment, index) => (
          <div
            key={index}
            className="fragment absolute text-lumi-light/30 font-mono text-sm md:text-base"
            style={{
              left: `${15 + ((index * 12) % 70)}%`,
              top: `${20 + ((index * 15) % 60)}%`,
              transform: `rotate(${((index * 7) % 20) - 10}deg)`,
            }}
          >
            {fragment}
          </div>
        ))}
      </motion.div>

      {/* Main content - fastest parallax creates foreground separation */}
      <motion.div
        style={{ y: yForeground }}
        className="relative z-10 max-w-5xl mx-auto px-6 md:px-12"
      >
        <div className="space-y-12 md:space-y-16">
          {/* Section headline */}
          <h2 className="world-headline display-text text-4xl md:text-6xl lg:text-7xl text-lumi-light">
            {STORY_CONTENT.worldBefore.headline}
          </h2>

          {/* Description with editorial spacing */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="editorial-text text-xl md:text-2xl lg:text-3xl text-lumi-light/70 max-w-3xl leading-relaxed"
          >
            {STORY_CONTENT.worldBefore.description}
          </motion.p>

          {/* Visual noise elements - layered UI metaphor */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-16 opacity-40">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 0.3, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="h-32 md:h-40 bg-lumi-muted/50 backdrop-blur-sm border border-lumi-light/10 rounded-lg"
                style={{
                  transform: `translateZ(${i * 10}px)`,
                }}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Gradient transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-lumi-darker to-transparent pointer-events-none" />
    </section>
  );
}
