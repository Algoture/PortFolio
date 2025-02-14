"use client";
import { motion } from "framer-motion";
import { skills, transition, variants } from "../Utils/Data";

const Skills = () => {
  return (
    <section className="flex flex-col mt-2 md:px-8 px-4 py-2 gap-1">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={transition}
        className=" dark:text-white text-2xl  font-bold text-black text-left">
        Tech Stack
      </motion.h1>
      <div className="flex flex-wrap gap-2 items-center ">
        {skills.map((item) => {
          return (
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={transition}
              className="px-2 py-1 text-sm dark:bg-neutral-200 dark:text-black text-neutral-100 bg-techstack cen rounded-md  focus:outline-hidden"
              key={item.id}>
              {item.skill}
            </motion.button>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
