"use client";

import { motion } from "framer-motion";

const Reveal = () => {
  return (
    <motion.div
      initial={{ height: "100%", y: "-100%" }}
      animate={{
        y: 0,
        height: ["100%", "50%", "20%"],
        transition: { duration: 2, delay: 0, ease: [0.8, 0, 0.25, 1] },
      }}
      className="absolute w-full h-full bottom-0 left-0 bg-base-300 z-[99999]  origin-bottom"
    />
  );
};

export default Reveal;
