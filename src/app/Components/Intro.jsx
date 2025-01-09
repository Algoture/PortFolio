"use client";

import { motion } from "framer-motion";

const Intro = () => {
  return (
    <main className="flex flex-col gap-2 bg-transparent ">
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 5 }}
        className="flex flex-col"
      >
        <p className="text-white text-5xl font-bold">
          Hi<span className="text-accent"> !</span> I&apos;m{" "}
          <span className="text-accent">Umesh</span>
          <br />
        </p>
        <p className=" text-white text-xl">Full Stack Design Developer</p>
        <p className="text-zinc-500 text-lg mt-1">
          I design + develop clean, minimal digital experiences.
        </p>
      </motion.div>
    </main>
  );
};

export default Intro;
