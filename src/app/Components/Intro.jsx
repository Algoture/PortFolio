"use client";

import { motion } from "framer-motion";
import { transition, variants } from "../Utils/Data";

const Intro = () => {
  return (
    <main className="flex flex-col mt-[10vh] md:mx-4 sm:mx-2 p-4 gap-2 justify-center w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.04 }}
        className="flex flex-col">
        <motion.p
          transition={transition}
          variants={variants}
          className="dark:text-white text-black text-5xl tracking-tight font-bold">
          Hi<span className="text-accent"> !</span> I&apos;m{" "}
          <span className="text-accent">Umesh</span>
          <br />
        </motion.p>
        <motion.p
          transition={transition}
          variants={variants}
          className=" dark:text-zinc-400 text-zinc-700 text-xl intro">
          Full Stack Design Developer<br/>
          <span className="text-zinc-700 dark:text-zinc-400 text-lg">I design + develop clean, minimal digital experiences.</span>
        </motion.p>
        
      </motion.div>
    </main>
  );
};

export default Intro;
