"use client";
import { motion } from "framer-motion";
import Reveal from "../Components/Reveal";

const Services = () => {
  return (
    <div className="w-full relative min-h-screen p-9 bg-base-100 flex flex-col gap-12 items-center justify-center pt-36">
      {/* <motion.span className="text-8xl font-bold overflow-hidden">
        <motion.h1
          initial={{ y: "90%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-90%" }}
          transition={{ duration: 0.85, delay: 1, ease: [0.8, 0, 0.25, 1] }}
        >
          OUR SERVICES
        </motion.h1>
      </motion.span> */}
      <div className="w-full h-[60vh] flex flex-row gap-16 max-w-screen-2xl ">
        <div className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"></div>
        <div className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"></div>
        <div className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"></div>
      </div>
    </div>
  );
};

export default Services;
