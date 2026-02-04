"use client";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="relative p-5 min-h-[80vh] min-w-[70vw] flex flex-col justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute top-5 left-6 right-12">
        <div className="flex justify-between md:w-1/2 text-[9px] text-neutral-400 font-mono mb-1">
          <span>0.00</span>
          <span>WIDTH: AUTO</span>
          <span>100.00</span>
        </div>
        <div className="md:w-1/2 h-px bg-neutral-400 relative">
          <div className="absolute left-0 -top-1 w-px h-2 bg-neutral-400" />
          <div className="absolute right-0 -top-1 w-px h-2 bg-neutral-400" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-8">
        <h1 className="text-6xl md:text-8xl font-bold dark:text-white text-black tracking-tighter leading-none">
          UMESH
          <br />
          <span
            className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-900 stroke-white"
            style={{ WebkitTextStroke: "1px #737373" }}>
            NAGARE
          </span>
        </h1>
        <div className="space-y-4">
          <div className="w-10 h-[1px] bg-accent" />
          <p className="text-lg md:text-xl text-neutral-500 font-medium leading-relaxed tracking-tight">
            Full Stack <span className="text-black dark:text-white">Engineer</span> & Design <span className="text-black dark:text-white">Engineer</span>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
