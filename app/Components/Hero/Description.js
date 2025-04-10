import { motion } from "framer-motion";

const Description = ({ opacity }) => {
  return (
    <motion.div
      style={{ opacity }}
      //   initial={{ y: "3rem", opacity: 0 }}
      //   animate={{
      //     y: 0,
      //     opacity: 1,
      //     transition: { duration: 1.2, delay: 0.85, ease: [0.7, 0, 0.25, 1] },
      //   }}
      //   exit={{
      //     y: "3rem",
      //     opacity: 0,
      //     transition: { duration: 0.8, delay: 0, ease: [0.7, 0, 0.25, 1] },
      //   }}
      className="w-5/12 relative flex flex-col gap-0 text-[1.5rem] xl:text-[1.65rem] 2xl:text-[1.8rem]"
    >
      <ParagraphLine delay={0.7}>Lorem ipsum dolor sit amet,</ParagraphLine>
      <ParagraphLine delay={0.78}>consectetur adipisicing elit.</ParagraphLine>
      <ParagraphLine delay={0.86}>
        Neque adipisci delectus sapiente
      </ParagraphLine>
      <ParagraphLine delay={0.94}>error possimus mollitia.</ParagraphLine>

      <div className="md:ml-2 xl:ml-4 3xl:ml-6 mt-10">
        <Button />
      </div>
    </motion.div>
  );
};
export default Description;

const ParagraphLine = ({ delay, children }) => {
  return (
    <motion.div className="overflow-hidden max-w-xl 2xl:max-w-3xl">
      <motion.p
        initial={{ y: "100%", rotate: 2 }}
        animate={{
          y: 0,
          rotate: 0,
          transition: { duration: 1.1, delay, ease: [0.8, 0, 0.25, 1] },
        }}
        exit={{
          y: "105%",
          transition: {
            duration: 0.8,
            delay: delay / 5,
            ease: [0.7, 0, 0.25, 1],
          },
        }}
        className=" px-1 origin-left text-balance font-normal tracking-wide opacity-80"
      >
        {children}
      </motion.p>
    </motion.div>
  );
};

const Button = () => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.8, delay: 1.6, ease: [0.8, 0, 0.25, 1] },
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.8,
          delay: 0.1,
          ease: [0.7, 0, 0.25, 1],
        },
      }}
      class="menu__link w-fit text-2xl md:text-3xl after:bg-base-content before:bg-base-content text-base-content 2xl:text-4xl relative uppercase font-bold tracking-wide"
    >
      Get a quote
    </motion.button>
  );
};
