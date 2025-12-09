"use client";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { links } from "../Utils/NavIcons";

const Nav = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="fixed bottom-2 left-1/2 transform -translate-x-1/2 z-50 w-auto">
      {/* Outer "Dock" Container */}
      <div className="relative flex items-center gap-2 p-2 px-4 rounded-xl bg-[#0a0a0a]/80 border border-neutral-800/80 backdrop-blur-xl shadow-[0_0_20px_-5px_rgba(0,0,0,0.8)]">
        {/* Continuous Top Scanline Animation */}
        <div className="absolute top-0 left-2 right-2 h-[1px] overflow-hidden opacity-50">
          <motion.div
            className="w-1/2 h-full bg-gradient-to-r from-transparent via-accent to-transparent blur-[1px]"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />
        </div>

        {/* Left Decorative Handle */}
        <div className="hidden sm:flex flex-col gap-1 pr-2 border-r border-neutral-800/50">
          <div className="w-1 h-1 bg-neutral-600 rounded-full" />
          <div className="w-1 h-1 bg-neutral-600 rounded-full" />
          <div className="w-1 h-1 bg-accent rounded-full animate-pulse" />
        </div>

        {/* The Icons Mapping */}
        <nav className="flex items-center gap-3 md:gap-2">
          {links.map(({ href, target, Icon, name }, index) => (
            <Link
              key={index}
              href={href}
              target={target}
              aria-label={name}
              className="relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}>
              {/* 1. The Icon Container */}
              <motion.div
                className="relative p-2 rounded-lg border border-transparent group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                {/* Icon itself - Force fill/stroke styling */}
                <div className="relative z-10 text-neutral-400 group-hover:text-accent transition-colors duration-300">
                  {/* Cloning element to enforce size if needed, or just render */}
                  <div className="size-5 [&>svg]:w-full [&>svg]:h-full [&>svg]:fill-current">
                    {Icon}
                  </div>
                </div>

                {/* Background Glow on Hover */}
                <div className="absolute inset-0 bg-accent opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300 rounded-lg" />

                {/* Corner Brackets (Technical Feel) appear on hover */}
                <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>

              {/* 2. The Holographic Tooltip */}
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap z-20">
                    <div className="relative px-3 py-1 bg-[#050505] border border-accent/50 rounded text-[9px] font-mono tracking-widest text-accent shadow-[0_0_10px_rgba(1,255,0,0.2)]">
                      <div className="absolute -bottom-[5px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[5px] border-t-accent/50" />
                      {`> EXEC: ${name.toUpperCase()}`}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>
          ))}
        </nav>

        {/* Right Decorative Handle (System Status) */}
        <div className="hidden sm:flex flex-col items-end pl-2 border-l border-neutral-800/50">
          <span className="text-[8px] text-neutral-600 font-mono leading-none mb-1">
            SYS
          </span>
          <span className="text-[8px] text-accent font-mono leading-none">
            RDY
          </span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
