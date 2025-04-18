"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import Description from "./Description";
import HeroImage from "./HeroImage";

const SubHero = ({}) => {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);

  const { scrollYProgress: totalProgress } = useScroll({
    target: sectionRef,
    offset: ["start", "end 0.9"],
  });

  const { scrollYProgress } = useScroll({
    target: headerRef,
    offset: ["start", "0.1 start"],
  });

  const subTitleOpacity = useTransform(
    totalProgress,
    [0, 0.15],
    ["100%", "0%"]
  );

  return (
    <motion.section className="h-[120vh] relative ">
      <div ref={sectionRef} className="absolute top-0 left-0 h-full " />
      <div
        ref={headerRef}
        className="relative top-0 gap-12 md:gap-16 xl:gap-20 pt-[20vh] min-h-[85vh] xl:min-h-[80vh] bg-base-100  flex px-6 md:px-12 xl:px-16 2xl:px-24 flex-col items-center justify-start w-full z-10 pb-10  border-neutral-content"
      >
        <Heading progress={totalProgress} />

        <motion.div className="relative max-w-[83vw] items-start justify-end flex flex-row gap-2 md:gap-10 xl:gap-16 2xl:gap-24 min-h-[75vh] max-h-[100vh] w-full pt-12 lg:pt-16 2xl:pt-20">
          <HeroImage progress={totalProgress} />
          <Description opacity={subTitleOpacity} />
        </motion.div>
      </div>
    </motion.section>
  );
};

export const Heading = ({ progress }) => {
  const titleOpacity = useTransform(progress, [0.65, 0.95], ["100%", "0%"]);
  const scale = useTransform(progress, [0, 1], ["100%", "85%"]);

  return (
    <motion.div
      style={{ scale, opacity: titleOpacity }}
      exit={{
        y: "2rem",
        opacity: 0,
        transition: { duration: 0.8, delay: 0, ease: [0.7, 0, 0.25, 1] },
      }}
      className=" origin-top overflow-hidden text-neutral-content h-[11vw] w-fit inset-x-0 mx-auto leading-none pb-12"
    >
      <motion.span
        initial={{ y: "90%" }}
        animate={{ y: 0 }}
        transition={{ duration: 1.3, delay: 0.3, ease: [0.8, 0, 0.25, 1] }}
        className="text-[13vw] xl:text-[12vw] jersey-15 inline-block text-base-content font-black font-cairo"
      >
        HUZA CUSTOMS
      </motion.span>
    </motion.div>
  );
};

export default SubHero;
