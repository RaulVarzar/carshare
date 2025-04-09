"use client";

import "./hamburger.css";
import { motion } from "framer-motion";
import Button from "./ActionButton/NavButton";

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHidden(scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: 0 }}
      animate={hidden ? { y: "-100%", opacity: 0 } : { y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 flex flex-row z-[999] max-w-screen-2xl 2xl:max-w-[1900px] mx-auto items-center w-full px-16 py-12 min-h-[15vh] xl:min-h-[20vh]"
    >
      <a href={"/"} className="text-3xl font-medium inline-block w-80">
        HOME
      </a>
      <Links />
      {/* <LanguageToggle /> */}
    </motion.nav>
  );
};

export const Links = () => {
  return (
    <ul className="flex grow text-base-content flex-row text-xl lg:text-2xl 2xl:text-3xl font-semibold gap-x-2 lg:gap-x-4 2xl:gap-x-12 w-full justify-end px-24">
      <Button link="/services" text={"Services"} />
      <Button link="/work" text={"Work"} />
      <Button link="/contact" text={"Contact"} />
      <Button link="/inquiry" text={"Inquiry"} />
    </ul>
  );
};

import { useState, useEffect } from "react";

const LanguageToggle = () => {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("appLanguage");
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ne" : "en";
    setLanguage(newLanguage);
    localStorage.setItem("appLanguage", newLanguage);
  };
  console.log(language);

  return (
    <div className="z-50">
      <label for="filter" class="switch" aria-label="Toggle Filter">
        <input type="checkbox" id="filter" />
        <span>EN</span>
        <span>NE</span>
      </label>
    </div>
  );
};

export default Navbar;
