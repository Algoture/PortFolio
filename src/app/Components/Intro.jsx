"use client";

import { motion } from "framer-motion";
import { resumeLink, transition, variants } from "../Utils/Data";
import { DriveIcon } from "./Icons";

const Intro = () => {
  return (
    <main className="flex flex-col mt-[80px] md:px-10 px-5 gap-2 justify-center w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.04 }}
        className="flex  flex-col">
        <div className="flex justify-between items-center">
          <motion.h1
            transition={transition}
            variants={variants}
            className="dark:text-white  text-black md:text-4xl text-3xl tracking-tight font-bold">
            Umesh Nagare
            <br />
          </motion.h1>
          <motion.a
            transition={transition}
            variants={variants}
            href={resumeLink}
            className="cen gap-1 bg-accent shadow-sh  text-neutral-900 md:p-1.5 p-1 rounded-lg "
            target="_blank">
            <DriveIcon className="size-5 fill-nav-icon" />
            Resume
          </motion.a>
        </div>
        <motion.p
          transition={transition}
          variants={variants}
          className=" dark:text-zinc-400 text-zinc-700 text-xl mt-2 intro">
          - Full Stack Engineer based in India.
          <br />
          <span className="text-zinc-700 dark:text-zinc-400 text-lg ">
            I can Design <span className="text-accent">+</span> Develop{" "}
            <span className="text-accent">+</span> Deploy Softwares solutions
          </span>
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Intro;
