"use client";
import {
  AnimatePresence,
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

import { useRef } from "react";
import PageTransitionAnimation from "../components/PageTransitionAnimation";

const Work = () => {
  return (
    <PageTransitionAnimation>
      <motion.div
        exit={{
          y: "2rem",
          opacity: 0,
          transition: { duration: 0.8, delay: 0, ease: [0.7, 0, 0.25, 1] },
        }}
        className="w-full relative min-h-screen p-9 bg-base-100  "
      >
        <Gallery />
      </motion.div>
    </PageTransitionAnimation>
  );
};

const Gallery = ({}) => {
  return (
    <motion.div className=" w-full pt-16 min-h-screen max-w-[1920px] mx-auto ">
      <GallerySection title={"Lorem Ipsum"} />
      <GallerySection title={"Dolor Sit Amet"} />
    </motion.div>
  );
};

const GallerySection = ({ title }) => {
  const titleRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: titleRef,
    offset: ["end", "end 0.8"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-110%"]);

  const isInView = useInView(titleRef, {
    margin: "-50% 0% 0% 0%",
  });

  return (
    <div
      ref={titleRef}
      className="flex flex-row w-full pb-8 md:pb-10 lg:pb-12 2xl:pb-16 border-b-2 border-base-content border-opacity-10 pt-24 md:pt-32 xl:pt-44 2xl:pt-52"
    >
      <div className="w-5/12 flex items-end  justify-end sticky h-fit top-[75vh] px-12 pb-24">
        <span className="overflow-hidden h-fit">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{
              y: "0%",
              transition: {
                delay: 0.3,
                duration: 1.2,
                ease: [0.7, 0, 0.25, 1],
              },
            }}
            className="text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl font-semibold"
          >
            {title}
          </motion.h1>
        </span>
      </div>
      <div className="w-7/12 flex flex-col gap-10">
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0% round 1rem)" }}
          animate={{
            clipPath: "inset(0% 0% 0% 0% round 1rem)",
            transition: {
              delay: 0.3,
              duration: 1.2,
              ease: [0.7, 0, 0.25, 1],
            },
          }}
          className="w-full aspect-auto bg-base-300 rounded-2xl overflow-hidden"
        >
          <img
            src={`/images/hero/hero.jpg`}
            alt="hero"
            className="object-cover origin-center"
          />
        </motion.div>
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0% round 1rem)" }}
          animate={{
            clipPath: "inset(0% 0% 0% 0% round 1rem)",
            transition: {
              delay: 0.3,
              duration: 1.2,
              ease: [0.7, 0, 0.25, 1],
            },
          }}
          className="w-full aspect-auto bg-base-300 rounded-2xl overflow-hidden"
        >
          <img
            src={`/images/main1.jpg`}
            alt="main1"
            className="object-cover origin-center"
          />
        </motion.div>
        <div className="w-full aspect-auto bg-base-300 rounded-2xl overflow-hidden">
          <img
            src={`/images/main2.jpg`}
            alt="main2"
            className="object-cover origin-center"
          />
        </div>
        <div className="w-full aspect-auto bg-base-300 rounded-2xl overflow-hidden">
          <img
            src={`/images/main3.jpg`}
            alt="main3"
            className="object-cover origin-center"
          />
        </div>
      </div>
    </div>
  );
};

function Heading({ loaded }) {
  return (
    <div className="fixed w-full h-full grid place-content-center inset-0 z-50">
      <AnimatePresence>
        {!loaded && (
          <motion.span className="text-8xl font-bold overflow-hidden pb-4 z-50">
            <motion.h1
              initial={{ y: "110%" }}
              animate={{
                y: "0%",
                transition: {
                  duration: 1.1,
                  delay: 1.7,
                  ease: [0.8, 0, 0.25, 1],
                },
              }}
              exit={{
                y: "-125%",
                transition: {
                  duration: 0.8,
                  delay: 0,
                  ease: [0.8, 0, 0.25, 1],
                },
              }}
            >
              Gallery
            </motion.h1>
          </motion.span>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!loaded && (
          <motion.div
            exit={{ opacity: 0, transition: { duration: 0, delay: 1 } }}
            className="absolute inset-0 w-full h-full bg-base-100 z-10"
          ></motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Work;
