"use client";
import { motion, useInView, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const carouselVariants = {
  first: { y: "0%" },
  second: { y: "-33.333%" },
  third: { y: "-66.666%" },
};

const IMAGES = ["main1.jpg", "main2.jpg", "main3.jpg"];

const Split = ({ progress }) => {
  const sectionOne = useRef(null);
  const sectionTwo = useRef(null);
  const sectionThree = useRef(null);
  const rightRef = useRef(null);

  const [activeSection, setActiveSection] = useState();

  const FirstInView = useInView(sectionOne, {
    margin: "-60% 0% -10% 0%",
  });
  const SecondInView = useInView(sectionTwo, {
    margin: "-60% 0% -40% 0%",
  });
  const ThirdInView = useInView(sectionThree, {
    margin: "-100% 0% -40% 0%",
  });

  useEffect(() => {
    if (FirstInView) {
      setActiveSection(1);
    } else if (SecondInView) {
      setActiveSection(2);
    } else if (ThirdInView) {
      setActiveSection(3);
    }
  }, [FirstInView, SecondInView, ThirdInView]);

  const x = useTransform(progress, [0.1, 0.85, 1], ["101%", "1%", "0%"]);

  const photoScale = useTransform(progress, [0.85, 1], ["95%", "100%"]);

  // const exitScale = useTransform(exit, [0, 1], ["100%", "96%"]);

  // const brightnessRaw = useTransform(exit, [0.05, 0.5], [0, 6]);

  // const filter = useMotionTemplate`blur(${brightnessRaw}px)`;

  return (
    <motion.div
      style={{ x }}
      className=" flex-col flex lg:flex-row  origin-bottom -mt-[300vh] bg-base-100 z-20 w-full "
    >
      <motion.div
        style={{ scale: photoScale }}
        className="sticky top-0  origin-left left-0 z-50 overflow-hidden md:w-1/2 xl:w-5/12 h-72 md:h-screen "
      >
        <motion.div
          transition={{ duration: 0.9, ease: [0.815, 0.075, 0.325, 0.945] }}
          variants={carouselVariants}
          initial={
            activeSection == 1
              ? "first"
              : activeSection == 2
              ? "second"
              : activeSection == 3 && "third"
          }
          animate={
            activeSection == 1
              ? "first"
              : activeSection == 2
              ? "second"
              : activeSection == 3 && "third"
          }
          className="flex flex-col  "
        >
          {IMAGES.map((image, i) => (
            <CarouselImage link={image} key={i} />
          ))}
        </motion.div>
      </motion.div>

      <div
        ref={rightRef}
        className="flex mt-[150vh] lg:mt-[250vh] lg:h-[300vh] flex-col md:w-1/2 xl:w-7/12 items-start w-full max-md:pt-80 "
      >
        <div
          ref={sectionOne}
          className="flex flex-col  items-center justify-center w-full md:h-screen  bg-base-100"
        >
          <div className="grid w-full px-6 gap-2 sm:gap-4 md:gap-8 place-content-start max-md:py-24 grow sm:px-8 lg:px-20 xl:px-24 2xl:px-28 pt-[10vh] lg:pt-[20vh]">
            <SectionTitle title={"Lorem Ipsum 1"} year="lorem ipsum" />
            <Subtitle />
            <Button />
          </div>
          <div className="w-11/12 h-0.5 mx-auto bg-neutral"></div>
        </div>

        <div
          ref={sectionTwo}
          className="flex flex-col items-center  justify-center w-full md:h-screen bg-base-100"
        >
          <div className="grid w-full px-6 gap-2 sm:gap-4 md:gap-8 place-content-start max-md:py-24 grow sm:px-8 lg:px-20 xl:px-24 2xl:px-28 pt-[10vh] lg:pt-[20vh]">
            <SectionTitle title={"Lorem Ipsum"} year="lorem ipsum" />
            <Subtitle />
            <Button />
          </div>

          <div className="w-11/12 h-0.5 mx-auto bg-neutral"></div>
        </div>
        <div
          ref={sectionThree}
          className="flex flex-col  items-center  justify-center w-full md:h-screen  bg-base-100"
        >
          <div className="grid w-full px-6 gap-2 sm:gap-4 md:gap-8 place-content-start max-md:py-24 grow sm:px-8 lg:px-20 xl:px-24 2xl:px-28 pt-[10vh] lg:pt-[20vh]">
            <SectionTitle title={"Lorem Ipsum"} year="lorem ipsum" />
            <Subtitle />
            <Button />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Split;

export const CarouselImage = ({ link }) => {
  return (
    <div className="relative w-full md:h-[110vh] h-80">
      <Image
        src={`/images/${link}`}
        layout="fill"
        objectFit="cover"
        alt={link}
        quality={100}
      />
    </div>
  );
};

export const SectionTitle = ({ title, year }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "1000% 0% -5% 0%",
  });
  return (
    <div ref={ref} className="overflow-hidden flex flex-row gap-2 items-end">
      <motion.h1
        initial={{ y: "110%", filter: "blur(6px)" }}
        animate={isInView ? { y: 0, filter: "blur(0px)" } : { y: "110%" }}
        transition={{
          delay: 0,
          duration: 0.8,
          ease: [0.85, 0.0, 0.495, 1.0],
        }}
        className=" font-bold uppercase origin-left text-base-content text-5xl sm:text-6xl lg:text-7xl 2xl:text-8xl"
      >
        {title}
      </motion.h1>
      <motion.span className="text-xl sm:text-2xl lg:text-3xl pb-1 2xl:text-4xl font-medium opacity-80">
        {year}
      </motion.span>
    </div>
  );
};

export const Subtitle = ({ content }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "1000% 0% -5% 0%",
  });
  return (
    <div ref={ref} className="overflow-hidden">
      <motion.p
        initial={{ opacity: 0, filter: "blur(2px)" }}
        animate={
          isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }
        }
        transition={{
          delay: 0.5,
          duration: 0.6,
          ease: [0.85, 0.0, 0.495, 1.0],
        }}
        className="text-lg italic font-medium sm:text-xl text-neutral-content lg:text-2xl 2xl:text-3xl opacity-75 w-11/12 max-w-5xl"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
        laboriosam ducimus, excepturi dolor non beatae amet minima assumenda
        tempore doloribus esse quibusdam. Sit eaque exercitationem quaerat illo
        nesciunt. Aspernatur, saepe? Nisi natus accusamus temporibus facilis
        delectus optio ad voluptates nostrum deserunt dolores voluptatibus fuga,
        exercitationem consequatur dolorem, rem quae minus explicabo culpa
        laborum.
      </motion.p>
    </div>
  );
};

export const Button = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    margin: "1000% 0% -5% 0%",
  });

  return (
    <motion.button
      ref={ref}
      initial={{ opacity: 0, filter: "blur(2px)" }}
      animate={isInView ? { opacity: 1, filter: "blur(0px)" } : { opacity: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.7,
        ease: [0.85, 0.0, 0.495, 1.0],
      }}
      className=" z-20  px-10 py-5 text-lg rounded-lg font-medium tracking-widest transition-all duration-300 shadow-sm md:text-xl w-fit  bg-accent text-base-content  hover:shadow-none "
    >
      Explore the collection
    </motion.button>
  );
};
