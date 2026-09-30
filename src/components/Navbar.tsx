"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-[#E5DDD3] shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo / Initials */}
        <a href="#hero" className="group flex items-center gap-1">
          <span className="text-2xl font-serif font-bold tracking-widest text-[#2C2A29] group-hover:text-[#B5713A] transition-colors duration-200">
            A
          </span>
          <span className="text-[10px] font-sans text-[#7A7570] tracking-[0.3em] uppercase self-end mb-1 group-hover:text-[#B5713A] transition-colors duration-200">
            M
          </span>
        </a>

        {/* CTA Button */}
        <a
          href="https://wa.me/6282230389393?text=Hi%20Afina!%20I%20would%20like%20to%20connect%20with%20you."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 bg-[#2C2A29] text-[#FAF8F5] text-sm font-sans tracking-wide rounded-full hover:bg-[#B5713A] transition-colors duration-300"
        >
          <span>Get me a coffee</span>
          <span>☕</span>
        </a>
      </div>
    </motion.nav>
  );
}
