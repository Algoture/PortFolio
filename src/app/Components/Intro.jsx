"use client";

import { motion } from "framer-motion";
import { transition, variants } from "../Utils/Data";

const Intro = () => {
  
  return (
    <main className="flex flex-col mx-4 gap-2 bg-transparent ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.04 }}
        className="flex flex-col">
        <motion.p
          transition={transition}
          variants={variants}
          className="text-white text-5xl font-bold">
          Hi<span className="text-accent"> !</span> I&apos;m{" "}
          <span className="text-accent">Umesh</span>
          <br />
        </motion.p>
        <motion.p
          transition={transition}
          variants={variants}
          className=" text-white text-xl">
          Full Stack Design Developer
        </motion.p>
        <motion.p
          transition={transition}
          variants={variants}
          className="text-zinc-400 text-lg mt-1">
          I design + develop clean, minimal digital experiences.
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Intro;
