"use client";
import styles from "./button.module.css";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTransitionStore } from "../../../lib/transitionStore";

const BorderButton = ({ link, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const triggerExit = useTransitionStore((state) => state.triggerExit);

  const path = usePathname();

  const isActive = link == path;

  return (
    <div className="relative">
      <motion.button
        onClick={() => !isActive && triggerExit(`${link}`)}
        onHoverStart={() => !isActive && setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className={
          "relative flex flex-col ml-4 overflow-hidden bg-none border border-base-content border-opacity-50 px-8 rounded-sm pt-3 pb-4 font-light  text-4xl    transition-all duration-300 " +
          (link == path
            ? "  brightness-110 cursor-default "
            : "  brightness-90 cursor-pointer hover:brightness-110 ")
        }
      >
        <motion.span
        // initial={{ y: 0 }}
        // animate={
        //   isHovered
        //     ? {
        //         y: "-110%",
        //         scale: 0.95,
        //         transition: { duration: 0.45, ease: [0.75, 0, 0.25, 1] },
        //       }
        //     : {
        //         y: 0,
        //         scale: 1,
        //         transition: { duration: 0.35, ease: [0.75, 0, 0.25, 1] },
        //       }
        // }
        >
          {text}
        </motion.span>
      </motion.button>
    </div>
  );
};

export default BorderButton;
