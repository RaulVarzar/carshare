"use client";
import styles from "./button.module.css";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { useTransitionStore } from "../../../lib/transitionStore";

const Button = ({ link, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  const triggerExit = useTransitionStore((state) => state.triggerExit);

  const router = useTransitionRouter();
  const path = usePathname();

  const isActive = link == path;

  function slideInOut() {
    const rootElement = document.documentElement;
    // const firstTier = rootElement.f;

    rootElement.animate([{ scale: 1 }, { scale: 0.9, filter: "blur(8px)" }], {
      duration: 1500,
      easing: "cubic-bezier(0.8, 0,0.25,1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    });

    rootElement.animate(
      [
        // { clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)" },
        // { clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)" },
        { scale: 1, transform: "translateY(0%)" },
        { scale: 1, transform: "translateY(0%)" },
      ],
      {
        duration: 0,
        easing: "cubic-bezier(0.8, 0, 0.25, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  }

  return (
    <motion.button
      // onClick={(e) => {
      //   e.preventDefault();
      //   if (link != path) {
      //     router.push(`${link}`, {});
      //   }
      // }}
      // href={`${link}`}
      onClick={() => triggerExit(`${link}`)}
      onHoverStart={() => !isActive && setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={
        "relative flex flex-col overflow-hidden bg-none  font-light  text-4xl    transition-opacity duration-300 " +
        (link == path
          ? "  opacity-100 cursor-default "
          : "  opacity-70 cursor-pointer hover:opacity-100 ")
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
  );
};

export default Button;
