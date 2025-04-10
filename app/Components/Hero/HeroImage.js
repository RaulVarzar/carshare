import { useMotionTemplate, useTransform, motion } from "framer-motion";

export const HeroImage = ({ progress }) => {
  const clipPathLeftRight = useTransform(progress, [0, 0.75], [50, 0]);
  const clipPathTopBottom = useTransform(progress, [0, 1], [45, 0]);
  const clipPath = useMotionTemplate`inset(0% ${clipPathLeftRight}% ${clipPathTopBottom}% 0% round 2.5rem)`;

  const scale = useTransform(progress, [0, 0.75], [0.6, 1]);

  return (
    <motion.div
      style={{ clipPath }}
      exit={{
        y: "2.5rem",
        opacity: 0,
        transition: { duration: 0.8, delay: 0, ease: [0.7, 0, 0.25, 1] },
      }}
      className="absolute origin-left top-0 left-0 h-full w-full z-10 undraggable rounded-3xl overflow-hidden max-h-[90vh] aspect-video"
    >
      <motion.img
        style={{ scale }}
        src={`/images/hero/hero.jpg`}
        alt="hero-image"
        fill={true}
        quality={90}
        // style={{ objectFit: "cover" }}
        sizes="(max-width: 768px) 80vw, 100vw"
        initial={{ clipPath: "inset(100% 0% 0% 0% round 2.5rem)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0% round 2.5rem)" }}
        transition={{ duration: 1.4, delay: 0.45, ease: [0.8, 0, 0.25, 1] }}
        className="absolute origin-top-left object-bottom object-cover w-full h-full undraggable brightness-90"
      />
    </motion.div>
  );
};

export default HeroImage;
