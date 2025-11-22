"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { writings } from "../Utils/Data";

const FileIcon = ({ className }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    className={className}>
    <path
      d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"
      strokeWidth="1.5"
    />
    <path d="M14 2v6h6" strokeWidth="1.5" />
    <path d="M10 13H8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 13h-2" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10 17H8" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 17h-2" strokeWidth="1.5" strokeLinecap="round" />
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
        <div className="absolute inset-0 bg-[#01ff00]/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

        <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="flex items-center gap-4 relative z-10">
          <div className="flex items-center justify-center w-8 h-8 rounded bg-neutral-900 border border-neutral-800 text-neutral-500 group-hover:text-[#01ff00] group-hover:border-[#01ff00] transition-colors">
            <FileIcon className="w-4 h-4" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="text-[9px] text-neutral-500 font-mono group-hover:text-[#01ff00]">
                LOG_0{index + 1} //
              </span>
              <h3 className="text-sm md:text-base text-neutral-300 font-mono font-bold group-hover:text-white transition-colors">
                {blog.title}
              </h3>
            </div>
            <div className="text-[9px] text-neutral-600 font-mono flex gap-2 mt-1">
              <span>SIZE: {Math.floor(Math.random() * 50 + 10)}KB</span>
              <span>•</span>
              <span>ACCESS: PUBLIC</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-6 relative z-10 pl-4">
          <div className="text-xs text-neutral-500 font-mono hidden md:block">
            <span className="text-neutral-700">[</span> {blog.date}{" "}
            <span className="text-neutral-700">]</span>
          </div>

          <div className="text-neutral-600 group-hover:text-[#01ff00] transform group-hover:translate-x-1 transition-all duration-300">
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
          <div className="w-2 h-2 bg-[#01ff00] rounded-full animate-pulse" />
          <h2 className="text-sm font-bold text-white tracking-widest uppercase">
            Archive_Logs
          </h2>
        </div>
        <div className="text-[10px] text-neutral-500 font-mono">
          DIR: /root/users/umesh/thoughts
        </div>
      </div>

      <div className="absolute top-20 left-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent hidden lg:block" />
      <div className="absolute top-20 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neutral-800 to-transparent hidden lg:block" />

      <div className="p-2 md:p-6 relative">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

        <div className="hidden md:flex justify-between px-14 py-2 text-[10px] text-neutral-600 font-mono uppercase border-b border-neutral-800/50 mb-2">
          <span>Filename</span>
          <span>Timestamp</span>
        </div>

        <div className="flex flex-col">
          {writings.map((blog, index) => (
            <LogEntry key={blog.title || index} blog={blog} index={index} />
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center gap-2 opacity-30">
          <div className="w-12 h-px bg-neutral-500" />
          <span className="text-[9px] text-neutral-500 font-mono">
            END_OF_DATA_STREAM
          </span>
          <div className="w-12 h-px bg-neutral-500" />
        </div>
      </div>
    </section>
  );
};

export default Writing;
