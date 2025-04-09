"use client";

import { AnimatePresence, useScroll, motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

import Split from "./Components/SplitSection/Split";
import Hero from "./Components/HeroSection/Hero";
import SubHero from "./Components/Hero/Hero";

import Gallery from "./Components/gallery/Gallery";
import { useRouter } from "next/navigation";
import { useTransitionStore } from "./lib/transitionStore";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end"],
  });

  const router = useRouter();
  const destination = useTransitionStore((state) => state.destination);
  const clearDestination = useTransitionStore(
    (state) => state.clearDestination
  );
  const [shouldExit, setShouldExit] = useState(false);

  useEffect(() => {
    if (destination) {
      setShouldExit(true);
    }
  }, [destination]);

  const handleExitComplete = () => {
    if (destination) {
      router.push(destination);
      clearDestination();
    }
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {!shouldExit && (
        <motion.main className="bg-base-100">
          <SubHero />

          <motion.div className="flex flex-col overflow-clip relative ">
            <Hero progress={scrollYProgress} />
            <div ref={heroRef} className="mt-[0vh] h-[100vh] w-full z-50 " />
            <Split progress={scrollYProgress} />
          </motion.div>

          <Gallery />
        </motion.main>
      )}
    </AnimatePresence>
  );
}
