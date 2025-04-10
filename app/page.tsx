"use client";

import { AnimatePresence, useScroll, motion } from "framer-motion";
import { useRef } from "react";

import Split from "./components/splitSection/Split";
import Hero from "./components/heroSection/Hero";
import SubHero from "./components/Hero/Hero";

import Gallery from "./components/gallery/Gallery";

import PageTransitionAnimation from "./components/PageTransitionAnimation";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end"],
  });

  return (
    <PageTransitionAnimation>
      <motion.main className="bg-base-100">
        <SubHero />

        <motion.div className="flex flex-col overflow-clip relative ">
          <Hero progress={scrollYProgress} />
          <div ref={heroRef} className="mt-[0vh] h-[100vh] w-full z-50 " />
          <Split progress={scrollYProgress} />
        </motion.div>

        <Gallery />
      </motion.main>
    </PageTransitionAnimation>
  );
}
