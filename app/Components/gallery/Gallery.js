import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

const Gallery = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], ["50%", "100%"]);

  return (
    <div className="relative ">
      <div className="h-screen sticky top-0 w-full -mt-[100vh]  bg-neutral-content grid place-content-center text-6xl font-bold text-neutral">
        <div className="flex flex-row gap-8">
          <motion.div
            style={{ scale }}
            className="aspect-square size-96 bg-base-200"
          ></motion.div>
          <div className="aspect-square size-96 bg-base-200"></div>
          <div className="aspect-square size-96 bg-base-200"></div>
          <div className="aspect-square size-96 bg-base-200"></div>
        </div>
      </div>
      <div ref={ref} className="h-[200vh] w-full  sticky top-0 "></div>
    </div>
  );
};

export default Gallery;
