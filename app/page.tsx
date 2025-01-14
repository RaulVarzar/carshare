"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

import Split from "./Components/SplitSection/Split";
import Hero from "./Components/HeroSection/Hero";
import SubHero from "./Components/SubHero/SubHero";

import SideMenu from "./Components/menu/SideMenu";
import Gallery from "./Components/gallery/Gallery";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end"],
  });

  // const splitExit = useRef(null);
  // const { scrollYProgress: splitScroll } = useScroll({
  //   target: splitExit,
  //   offset: ["start end", "start"],
  // });

  return (
    <main className="">
      <SideMenu />
      <SubHero />

      <div className="flex flex-col overflow-clip relative bg-neutral-content">
        <Hero progress={scrollYProgress} />
        <div ref={heroRef} className="mt-[0vh] h-[100vh] w-full z-50 " />
        <Split progress={scrollYProgress} />
      </div>

      <Gallery />
    </main>
  );
}
