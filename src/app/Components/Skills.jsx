"use client";
import { motion } from "framer-motion";
import { skills, transition, variants } from "../Utils/Data";

const Skills = () => {
  return (
    <section className="flex flex-col mt-2 px-8 py-4 gap-1">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={variants}
        transition={transition}
        className=" dark:text-white text-xl  font-bold text-black text-left">
        Tech Stack
      </motion.h1>
      <div className="flex flex-wrap gap-2 items-center ">
        {skills.slice(0, 8).map((item) => {
          return (
            <motion.button
              initial="hidden"
              whileInView="visible"
              variants={variants}
              viewport={{ once: true }}
              transition={transition}
              className="skillsbtn"
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
