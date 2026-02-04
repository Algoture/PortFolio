"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { writings } from "../Utils/Data";

const ThinArrow = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}
    strokeWidth="1.2">
    <path
      d="M17 7L7 17M17 7H7M17 7V17"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogEntry = ({ blog, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.08,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      }}>
      <Link
        href={blog.link}
        target="_blank"
        className="group flex flex-col md:flex-row md:items-center justify-between py-4 md:py-6 border-b border-neutral-100 dark:border-neutral-900 transition-all duration-300">
        <div className="flex items-center gap-3 md:gap-6">
          <div className="w-1 h-1 rounded-full bg-accent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-2 group-hover:translate-x-0" />

          <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
            <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:text-accent transition-colors duration-300">
              {blog.title}
            </h3>
            <span className="hidden md:block text-[10px] font-bold uppercase tracking-widest text-neutral-400 opacity-0 group-hover:opacity-100 transition-all duration-500">
              Read Entry
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between md:justify-start gap-4 md:gap-8 mt-3 md:mt-0 w-full md:w-auto">
          <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-tighter">
            {blog.date}
          </div>

          <div className="text-neutral-300 dark:text-neutral-700 group-hover:text-accent group-hover:rotate-0 transition-all duration-500 -rotate-45">
            <ThinArrow className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Writing = () => {
  return (
    <section className="w-full relative">
      <div className="relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />
        <div className="flex flex-col">
          {writings.map((blog, index) => (
            <LogEntry key={blog.title || index} blog={blog} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Writing;
