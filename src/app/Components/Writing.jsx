"use client"
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
        className="dark:text-white text-gray-800 md:pl-8 pl-4 text-3xl font-normal my-1">
        Writing
      </motion.h1>
      <div className="md:pl-8 pl-4  my-1">
        <Link href="">Threads and Processes</Link>
      </div>
    </>
  );
};
export default Writing;
