"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useTransitionStore } from "../lib/transitionStore";

const Services = () => {
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
      <AnimatePresence onExitComplete={handleExitComplete}>
        {!shouldExit && (
          <motion.div className="w-full h-[60vh] flex flex-row gap-16 max-w-screen-2xl ">
            <motion.div
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              exit={{ y: "3rem", opacity: 0 }}
              transition={{ delay: 0.1, duration: 1, ease: [0.7, 0, 0.25, 1] }}
              className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
            ></motion.div>
            <motion.div
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              exit={{ y: "3rem", opacity: 0 }}
              transition={{ delay: 0.25, duration: 1, ease: [0.7, 0, 0.25, 1] }}
              className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
            ></motion.div>
            <motion.div
              initial={{ y: "-3rem", opacity: 0 }}
              animate={{ y: "0rem", opacity: 1 }}
              exit={{ y: "3rem", opacity: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.7, 0, 0.25, 1] }}
              className="w-1/3 h-full border-2 border-base-content border-opacity-5 rounded-lg bg-base-200 bg-opacity-15"
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;
