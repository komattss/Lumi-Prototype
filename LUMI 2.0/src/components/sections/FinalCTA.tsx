"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_CONTENT } from "@/utils/content";

/**
 * FINAL CTA (Call to Action)
 * Purpose: Invitation, not pressure
 *
 * Motion Strategy:
 * - Parallax reduced or disabled - focus on decision
 * - Clear, grounded, focused design
 * - Buttons have subtle hover states only
 * - No distracting animations
 * - Feels like a natural conclusion to the journey
 */

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Handler untuk navigasi ke superapps LUMI
  const handleBeginJourney = () => {
    // Ganti port sesuai dengan port mini superapps Anda
    // Contoh: jika superapps di localhost:3000, ubah ke 'http://localhost:3000'
    // Contoh: jika superapps di localhost:5000, ubah ke 'http://localhost:5000'

    const superappURL = "http://localhost:3000"; // ← Ganti dengan port superapps Anda

    console.log("Navigating to LUMI Superapps...");

    // Buka di tab yang sama (redirect)
    window.location.href = superappURL;

    // Atau buka di tab baru (uncomment line di bawah, comment line di atas)
    // window.open(superappURL, '_blank');
  };

  const handleLearnMore = () => {
    // Navigate ke halaman learn more atau dokumentasi
    window.location.href = "/about"; // sesuaikan dengan kebutuhan
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Simple, grounded entrance
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 60%",
        onEnter: () => {
          gsap.from(".cta-headline", {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
          });

          gsap.from(".cta-description", {
            y: 40,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.3,
          });

          gsap.from(".cta-buttons", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: 0.6,
          });
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-lumi-darker section-padding-lg"
    >
      {/* Minimal background - no distraction */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-lumi-accent/5 blur-[150px]" />
      </div>

      {/* Main content - centered and focused */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12 md:space-y-16">
          {/* Headline */}
          <h2 className="cta-headline display-text text-4xl md:text-6xl lg:text-7xl text-lumi-light">
            {STORY_CONTENT.cta.headline}
          </h2>

          {/* Description */}
          <p className="cta-description editorial-text text-xl md:text-2xl lg:text-3xl text-lumi-light/70 max-w-2xl mx-auto">
            {STORY_CONTENT.cta.description}
          </p>

          {/* CTA Buttons */}
          <div className="cta-buttons flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 md:mt-16">
            {/* Primary CTA - Navigate to Superapps */}
            <motion.button
              onClick={handleBeginJourney}
              className="group relative px-10 py-5 rounded-full bg-gradient-to-r from-lumi-accent to-lumi-glow text-lumi-light font-medium text-lg overflow-hidden cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6 }}
              />
              <span className="relative z-10">
                {STORY_CONTENT.cta.primaryCTA}
              </span>
            </motion.button>

            {/* Secondary CTA - Learn More */}
            <motion.button
              onClick={handleLearnMore}
              className="px-10 py-5 rounded-full border-2 border-lumi-light/20 text-lumi-light font-medium text-lg backdrop-blur-sm hover:border-lumi-light/40 hover:bg-lumi-light/5 transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              {STORY_CONTENT.cta.secondaryCTA}
            </motion.button>
          </div>

          {/* Footer spacing */}
          <div className="pt-20 md:pt-32">
            <motion.div
              className="flex items-center justify-center gap-2 text-lumi-light/30 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 1 }}
            >
              <span>◈</span>
              <span>LUMI</span>
              <span>·</span>
              <span>2024</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
    </section>
  );
}
