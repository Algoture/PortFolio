"use client";
import { motion } from "motion/react";
import Link from "next/link";
import { writings } from "../Utils/Data";

const FileIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    viewBox="0 0 24 24">
    <g>
      <path
        d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5C3 2.79086 4.79086 1 7 1H13.3428ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H15.5C16.0523 18 16.5 17.5523 16.5 17C16.5 16.4477 16.0523 16 15.5 16H8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H8ZM13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H13Z"
        fill="url(#1752500502785-6792502_file_existing_0_ha8dpblo1)"
        data-glass="origin"
        mask="url(#1752500502785-6792502_file_mask_6pjiec06j)"></path>
      <path
        d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5C3 2.79086 4.79086 1 7 1H13.3428ZM8 16C7.44772 16 7 16.4477 7 17C7 17.5523 7.44772 18 8 18H15.5C16.0523 18 16.5 17.5523 16.5 17C16.5 16.4477 16.0523 16 15.5 16H8ZM8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14H9C9.55228 14 10 13.5523 10 13C10 12.4477 9.55228 12 9 12H8ZM13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14H16C16.5523 14 17 13.5523 17 13C17 12.4477 16.5523 12 16 12H13Z"
        fill="url(#1752500502785-6792502_file_existing_0_ha8dpblo1)"
        data-glass="clone"
        filter="url(#1752500502785-6792502_file_filter_pe3s0hi4h)"
        clipPath="url(#1752500502785-6792502_file_clipPath_t9np9je6l)"></path>
      <path
        d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15C13.8954 9 13 8.10457 13 7V1H13.3428Z"
        fill="url(#1752500502785-6792502_file_existing_1_dlzvjod37)"
        data-glass="blur"></path>
      <path
        d="M13 7V1H13.3428C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15V8.25H20.1074C20.0992 8.2377 20.0921 8.22384 20.083 8.21094C19.9288 7.99318 19.6893 7.74982 19.2979 7.3584L14.6416 2.70215C14.2502 2.31073 14.0068 2.07117 13.7891 1.91699C13.776 1.90775 13.7624 1.89991 13.75 1.8916V7C13.75 7.69036 14.3096 8.25 15 8.25V9C13.8954 9 13 8.10457 13 7Z"
        fill="url(#1752500502785-6792502_file_existing_2_wmh1k53h9)"></path>
      <defs>
        <linearGradient
          id="1752500502785-6792502_file_existing_0_ha8dpblo1"
          x1="12"
          y1="1"
          x2="12"
          y2="23"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff"></stop>
        </linearGradient>
        <linearGradient
          id="1752500502785-6792502_file_existing_1_dlzvjod37"
          x1="17"
          y1="1"
          x2="17"
          y2="9"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#E3E3E5" stopOpacity=".6"></stop>
          <stop offset="1" stopColor="#BBBBC0" stopOpacity=".6"></stop>
        </linearGradient>
        <linearGradient
          id="1752500502785-6792502_file_existing_2_wmh1k53h9"
          x1="17"
          y1="1"
          x2="17"
          y2="5.633"
          gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff"></stop>
          <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
        </linearGradient>
        <filter
          id="1752500502785-6792502_file_filter_pe3s0hi4h"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse">
          <feGaussianBlur
            stdDeviation="2"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"></feGaussianBlur>
        </filter>
        <clipPath id="1752500502785-6792502_file_clipPath_t9np9je6l">
          <path
            d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15C13.8954 9 13 8.10457 13 7V1H13.3428Z"
            fill="url(#1752500502785-6792502_file_existing_1_dlzvjod37)"></path>
        </clipPath>
        <mask id="1752500502785-6792502_file_mask_6pjiec06j">
          <rect width="100%" height="100%" fill="#FFF"></rect>
          <path
            d="M13.3428 1C13.9996 1 14.4217 1.42173 15.1719 2.17188L19.8281 6.82812C20.5783 7.57827 21 8.00037 21 8.65723V9H15C13.8954 9 13 8.10457 13 7V1H13.3428Z"
            fill="#fff"></path>
        </mask>
      </defs>
    </g>
  </svg>
);

const ArrowIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}>
    <path
      d="M5 12h14"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 5l7 7-7 7"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LogEntry = ({ blog, index }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0, x: -10 },
        visible: { opacity: 1, x: 0, transition: { delay: index * 0.05 } },
      }}>
      <Link
        href={blog.link}
        target="_blank"
        className="group relative flex items-center justify-between py-4 px-2 border-b border-neutral-800 hover:bg-neutral-900/40 transition-all duration-300">
        <div className="absolute inset-0 bg-accent/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex items-center gap-4 relative z-10">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-neutral-900 border border-neutral-800 text-neutral-500 group-hover:text-accent group-hover:border-accent transition-colors">
            <FileIcon className="w-4 h-4" />
          </div>

          <div className="flex flex-col">
            <h3 className="text-sm md:text-base text-neutral-300 font-mono font-bold group-hover:text-white transition-colors">
              {blog.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-6 relative z-10 pl-4">
          <div className="text-xs text-neutral-500 font-mono hidden md:block">
            <span className="text-neutral-700">[</span> {blog.date}{" "}
            <span className="text-neutral-700">]</span>
          </div>

          <div className="text-neutral-600 group-hover:text-accent transform group-hover:translate-x-1 transition-all duration-300">
            <ArrowIcon className="w-5 h-5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Writing = () => {
  return (
    <section className="w-full max-w-7xl mx-auto relative bg-neutral-950 border-t border-neutral-800">
      <div className="flex items-center justify-between px-6 py-4 bg-neutral-900/50 border-b border-neutral-800">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
          <h2 className="text-sm font-bold text-white tracking-widest uppercase">
            Archive_Logs
          </h2>
        </div>
      </div>

      <div className="absolute top-20 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent hidden lg:block" />

      <div className="p-2 md:p-6 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

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
