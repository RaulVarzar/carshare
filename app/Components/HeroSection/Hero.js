"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Hero = ({ progress }) => {
  const trackerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: trackerRef,
    offset: ["start end", "start"],
  });

  const x = useTransform(progress, [0.15, 1], ["0%", "-35%"]);
  const scale = useTransform(progress, [0, 0.15, 1], ["100%", "90%", "80%"]);

  return (
    <section className="relative h-[100vh]">
      <motion.div
        style={{ x, scale }}
        className="fixed left-0 w-full  font-bold top-0 grid h-screen text-4xl md:text-6xl xl:text-8xl place-content-center text-base-content"
      >
        Hero Section
      </motion.div>
      {/* <div
        ref={trackerRef}
        className="h-[200vh] border-8 border-error z-50 "
      ></div> */}
    </section>
  );
};

export default Hero;
