"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";

import main from "../../../public/images/main1.jpg";
import Image from "next/image";

const SubHero = ({}) => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "20vh"]);
  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "105%"]);
  const photoY = useTransform(scrollYProgress, [0, 1], ["0vh", "30vh"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], ["105%", "100%"]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full z-10 border- pb-12  border-neutral-content"
    >
      <motion.div
        style={{ y, scale }}
        className="absolute flex flex-col  tracking-tight  bottom-[25vh] 2xl:bottom-[30vh] left-0 right-0 text-neutral-content h-fit w-fit inset-x-0 mx-auto    z-20  "
      >
        {/* <span className="text-6xl md:text-7xl xl:text-9xl font-bold text-slate-100 ">
          THE
        </span> */}
        <span className="text-8xl md:text-9xl xl:text-xxl jersey-15   inline-block text-white font-black font-cairo tracking-wide">
          MAZDA MX5
        </span>
        <span className="text-neutral-content pl-3 font-black justify-end inline-block  -mt-6 text-2xl md:text-7xl xl:text-7xl font-jersey tracking-wider">
          Club România
        </span>
      </motion.div>

      <motion.div className="absolute inset-0 overflow-hidden  ">
        <motion.div
          style={{ y: photoY }}
          className="absolute h-full w-full z-10 undraggable"
        >
          <Image
            src={`/images/hero/hero.jpg`}
            alt="hero-image"
            fill={true}
            quality={90}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 80vw, 100vw"
            className="absolute  object-bottom object-cover w-full h-full undraggable"
          />
        </motion.div>

        <motion.div
          style={{ y: photoY }}
          className="absolute h-full w-full z-30 undraggable"
        >
          <Image
            src={`/images/hero/car.png`}
            alt="hero-image"
            fill={true}
            quality={90}
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 80vw, 100vw"
            className="absolute top-0 left-0  object-bottom object-cover w-full h-full undraggable"
          />{" "}
        </motion.div>
      </motion.div>

      {/* <Image
        src={`/images/hero/tower.png`}
        alt="hero-image"
        fill={true}
        style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 80vw, 100vw"
        className="absolute top-0 left-0  object-bottom object-cover w-full h-full z-50"
      /> */}
    </section>
  );
};

export default SubHero;
