"use client";
import styles from "./button.module.css";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTransitionStore } from "../../../lib/transitionStore";

const Button = ({ link, text }) => {
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
          "relative flex flex-col overflow-hidden bg-none  font-light  text-4xl    transition-all duration-300 " +
          (link == path
            ? "  brightness-125 cursor-default "
            : "  brightness-[.8] cursor-pointer hover:brightness-110 ")
        }
      >
        <motion.span
          initial={{ y: 0 }}
          animate={
            isHovered
              ? {
                  y: "-110%",
                  scale: 0.95,
                  transition: { duration: 0.45, ease: [0.75, 0, 0.25, 1] },
                }
              : {
                  y: 0,
                  scale: 1,
                  transition: { duration: 0.35, ease: [0.75, 0, 0.25, 1] },
                }
          }
        >
          {text}
        </motion.span>
        <motion.span
          initial={{ y: "105%" }}
          animate={
            isHovered
              ? {
                  y: "0%",
                  scale: 1,
                  transition: {
                    duration: 0.45,
                    ease: [0.75, 0, 0.25, 1],
                  },
                }
              : {
                  y: "105%",
                  scale: 0.95,
                  transition: { duration: 0.35, ease: [0.75, 0, 0.25, 1] },
                }
          }
          className="absolute bottom-0 translate-y-full left-0"
        >
          {text}
        </motion.span>
      </motion.button>

      <AnimatePresence>
        <motion.div // FIX THIS
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ y: 10, opacity: 0 }}
        >
          {link == path && (
            <motion.div
              layoutId="dot"
              className="absolute -bottom-3 inset-x-0 mx-auto size-1.5 bg-base-content rounded-xl"
              transition={{ duration: 0.5, ease: [0.6, 0, 0.35, 1] }}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Button;
