"use client";
import { motion } from "framer-motion";
import { transition, variants } from "../Utils/Data";
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
        className="dark:text-white mt-4 text-black md:pl-8 pl-4 text-2xl  font-bold my-1">
        Writings
      </motion.h1>
      <div className="md:px-8 px-4 my-1 ">
        <motion.div
          className="dark:bg-zinc-800 bg-gray-200 dark:text-white z-0 border-lightborder dark:border-stroke border p-2 rounded-lg flex justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={transition}
          variants={variants}>
          <Link
            target="_blank"
            href="https://umeshthreads.hashnode.dev/threads-and-processes-in-cpu">
            Threads and Processes in CPU
          </Link>
          <p>Mar 8,2025</p>
        </motion.div>
      </div>
    </>
  );
};
export default Writing;
