"use client";
import { motion } from "framer-motion";
import { transition, variants, writings } from "../Utils/Data";
import Link from "next/link";

const Writing = () => {
  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        variants={variants}
        className="dark:text-white mt-4 text-black md:pl-10 pl-5 text-2xl  font-bold my-1">
        Writings
      </motion.h1>
      <div className="md:px-10 px-5 my-1 ">
        {writings.map((blogs) => {
          return (
            <motion.div
              className="md:flex-row border-lightborder dark:border-stroke border flex-col hover:dark:bg-hover dark:bg-neutral-800 bg-neutral-100 text-gray-900 dark:text-white z-0  rounded-md mb-4 p-4  flex justify-between"
              initial="hidden"
              key={blogs.title}
              whileInView="visible"
              viewport={{ once: true }}
              transition={transition}
              variants={variants}>
              <Link target="_blank" href={blogs.link}>
                {blogs.title}
              </Link>
              <p>{blogs.date}</p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};
export default Writing;
