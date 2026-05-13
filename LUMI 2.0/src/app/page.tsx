"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/utils/performance";

// Dynamically import story components for better performance
const PrologueHero = dynamic(
  () => import("@/components/sections/PrologueHero")
);
const WorldBeforeLumi = dynamic(
  () => import("@/components/sections/WorldBeforeLumi")
);
const LumiEmergence = dynamic(
  () => import("@/components/sections/LumiEmergence")
);
const LumiEvolution = dynamic(
  () => import("@/components/sections/LumiEvolution")
);
const HumanAndLumi = dynamic(
  () => import("@/components/sections/HumanAndLumi")
);
const FutureVision = dynamic(
  () => import("@/components/sections/FutureVision")
);
const FinalCTA = dynamic(() => import("@/components/sections/FinalCTA"));

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Respect reduced motion preferences
    const shouldReduceMotion = prefersReducedMotion();

    if (shouldReduceMotion) {
      // Disable or simplify animations
      gsap.globalTimeline.timeScale(0.1); // Dramatically slow down animations
      console.log("ℹ️ Reduced motion mode enabled");
    }

    // Configure ScrollTrigger defaults
    ScrollTrigger.defaults({
      markers: false,
      toggleActions: "play none none reverse",
    });

    // Cleanup GSAP ScrollTriggers on unmount
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative bg-lumi-darker">
      {/* Each section is a chapter in the LUMI narrative */}
      <PrologueHero />
      <WorldBeforeLumi />
      <LumiEmergence />
      <LumiEvolution />
      <HumanAndLumi />
      <FutureVision />
      <FinalCTA />
    </main>
  );
}
