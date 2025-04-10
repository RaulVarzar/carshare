"use client";

import "./hamburger.css";
import { motion } from "framer-motion";
import Button from "./ActionButton/NavButton";
import BorderButton from "./ActionButton/BorderButton";
import { useTransitionStore } from "../../lib/transitionStore";

const Navbar = () => {
  const [hovering, setHovering] = useState(false);
  const triggerExit = useTransitionStore((state) => state.triggerExit);
  const path = usePathname();
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);
  const scrollOffset = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (hovering) {
        // disable hiding if hovering
        return;
      }
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      const threshold = currentScrollY > 300 ? 75 : 25;

      if (delta > 0) {
        // Scrolling down
        scrollOffset.current += delta;
        if (scrollOffset.current > threshold) {
          setShow(false);
          scrollOffset.current = 0;
        }
      } else if (delta < 0) {
        // Scrolling up
        scrollOffset.current += delta;
        if (Math.abs(scrollOffset.current) > threshold) {
          setShow(true);
          scrollOffset.current = 0;
        }
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hovering]);

  return (
    <motion.nav
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.7, ease: [0.7, 0, 0.3, 1] }}
      className="fixed top-0 left-0 right-0  z-[999]"
    >
      <motion.div
        onHoverStart={() => setHovering(true)}
        onHoverEnd={() => setHovering(false)}
        animate={show ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 }}
        transition={{ duration: 0.9, ease: [0.7, 0, 0.3, 1] }}
        className=" flex gap-x-6 items-center xl:gap-x-8 flex-row w-full lg:w-11/12 max-w-screen-2xl 2xl:max-w-[1920px] mx-auto  py-12 min-h-[105vh] xl:min-h-[12vh]"
      >
        <Logo path={path} triggerExit={triggerExit} />

        <Links />
        <LanguageToggle />
      </motion.div>
    </motion.nav>
  );
};

const Logo = ({ path, triggerExit }) => {
  return (
    <button
      onClick={() => path != "/" && triggerExit(`/`)}
      className="text-4xl font-black px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="32"
        fill="none"
        viewBox="0 0 176 40"
      >
        <path
          fill="#ddd"
          fill-rule="evenodd"
          d="M15 28a5 5 0 0 1-5-5V0H0v23c0 8.284 6.716 15 15 15h11V28H15ZM45 10a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-19 9C26 8.507 34.507 0 45 0s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM153 10a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9Zm-19 9c0-10.493 8.507-19 19-19s19 8.507 19 19-8.507 19-19 19-19-8.507-19-19ZM85 0C74.507 0 66 8.507 66 19s8.507 19 19 19h28c1.969 0 3.868-.3 5.654-.856L124 40l5.768-10.804A19.007 19.007 0 0 0 132 20.261V19c0-10.493-8.507-19-19-19H85Zm37 19a9 9 0 0 0-9-9H85a9 9 0 1 0 0 18h28a9 9 0 0 0 9-8.93V19Z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </button>
  );
};

export const Links = () => {
  return (
    <ul className="flex grow items-center px-4 md:px-8 lg:px-16 xl:px-24 text-base-content flex-row text-xl lg:text-2xl 2xl:text-3xl font-semibold gap-x-2 lg:gap-x-4 2xl:gap-x-12 w-full justify-end ">
      <Button link="/services" text={"Services"} />
      <Button link="/work" text={"Work"} />
      <Button link="/contact" text={"Contact"} />
      <BorderButton link="/inquiry" text={"Inquiry"} />
    </ul>
  );
};

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { GrLanguage } from "react-icons/gr";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("EN");
  const [hovering, setHovering] = useState(false);
  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "EN" ? "NE" : "EN";
    setLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage);
  };

  const transform =
    language === "EN"
      ? hovering
        ? { y: "-50%" }
        : { y: 0 }
      : language === "NE"
      ? hovering
        ? { y: 0 }
        : { y: "-50%" }
      : { y: 0 };

  return (
    <div
      onClick={() => toggleLanguage()}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className="z-50 text-2xl cursor-pointer p-2 flex flex-row items-center justify-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity duration-300"
    >
      <GrLanguage />
      <div className="uppercase overflow-hidden h-8 flex flex-col text-2xl font-medium">
        <motion.div
          animate={transform}
          transition={{ duration: 0.3, ease: [0.7, 0, 0.3, 1] }}
          className="flex flex-col"
        >
          <span>EN</span>
          <span>NE</span>
        </motion.div>
        {language}
      </div>
    </div>
  );
};

export default Navbar;
