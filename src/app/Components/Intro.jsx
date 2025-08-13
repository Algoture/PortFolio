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
            className="text-white  md:text-4xl text-3xl tracking-tight font-bold">
            Umesh Nagare
            <br />
          </motion.h1>
        </div>
        <motion.p
          transition={transition}
          variants={variants}
          className=" text-muted/70 text-xl mt-2 intro">
          Full Stack Engineer based in India.
          <br />
          <span className="text-muted/70 text-lg ">
            I love <span className="text-white">Designing </span>
            <span className="text-accent">+</span>
            <span className="text-white"> Developing</span> Softwares
          </span>
        </motion.p>
      </motion.div>
    </main>
  );
};

export default Intro;
