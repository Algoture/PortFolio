"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { GitHubIcon, GlobeIcon } from "../app/Components/Icons";
import { projects } from "@/app/Utils/Data";
import { Callout, DrawBorder, Gyroscope, KernelModule, TerminalLog } from "./Components/TechUI";
import Writing from "./Components/Writing";
import Skills from "./Components/Skills";


const TechLabel = ({ children, className }) => (
  <span className={`text-[10px] text-neutral-500 tracking-widest uppercase block mb-1 ${className}`}>
    {children}
  </span>
);

const TechButton = ({ href, label, icon: Icon, highlight }) => (
  <Link
    href={href}
    target="_blank"
    className={`
      group flex items-center gap-2 px-3 py-2 text-xs font-bold uppercase tracking-wider border transition-all duration-300
      ${highlight
        ? "border-accent bg-accent/10 text-accent hover:bg-accent hover:text-black"
        : "border-neutral-700 text-neutral-400 hover:border-neutral-400 hover:text-white"}
    `}
  >
    {Icon && <Icon className="size-3 fill-current" />}
    {label}
  </Link>
);

const Hero = () => {
  return (
    <section className="col-span-12 lg:col-span-8 relative p-10 min-h-[60vh] border-r border-neutral-800 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute top-10 left-10 right-12">
        <div className="flex justify-between text-[9px] text-neutral-500 font-mono mb-1">
          <span>0.00</span>
          <span>WIDTH: AUTO</span>
          <span>100.00</span>
        </div>
        <div className="w-full h-px bg-neutral-700 relative">
          <div className="absolute left-0 -top-1 w-px h-3 bg-neutral-700" />
          <div className="absolute right-0 -top-1 w-px h-3 bg-neutral-700" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative"
      >
        <Callout text="ENGINEER" className="-top-5 -left-4" />

        <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tighter leading-none">
          UMESH<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-700 to-neutral-900 stroke-white" style={{ WebkitTextStroke: '1px #737373' }}>
            NAGARE
          </span>
        </h1>

        <svg className="absolute -bottom-8 left-20 w-12 h-12 text-accent opacity-50" viewBox="0 0 50 50">
          <path d="M 0 0 L 0 50 L 50 50" fill="none" stroke="currentColor" />
        </svg>
      </motion.div>

      <div className="mt-12 ml-24 pl-6 border-l border-accent/30 relative">
        <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-accent" /> {/* Little square node */}
        <p className="text-xl text-neutral-400 font-mono">
          // ARCHITECTING DIGITAL SOLUTIONS <br />
          <span className="text-sm text-neutral-600">TARGET: WEB_APPLICATIONS</span>
        </p>
      </div>

    </section>
  );
};

const Sidebar = () => {
  return (
    <aside className="col-span-12 lg:col-span-4 flex flex-col relative min-h-[600px] lg:min-h-auto border-b lg:border-b-0 lg:border-l border-neutral-800 bg-neutral-950/30">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
      <div className="p-6 border-b border-neutral-800 relative overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <TechLabel className="mb-0">SYS_TARGET</TechLabel>
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-accent rounded-full animate-ping" />
            <div className="w-1 h-1 bg-accent rounded-full" />
          </div>
        </div>

        <Gyroscope />

        <div className="flex justify-between text-[9px] text-neutral-500 font-mono mt-2">
          <span>ROT_VEL: 400rpm</span>
          <span>STABILITY: 100%</span>
        </div>
      </div>

      <div className="p-6 border-b border-neutral-800 flex-1">
        <div className="flex items-end justify-between mb-6">
          <h3 className="text-sm font-bold text-white tracking-wider">MODULES_LOADED</h3>
          <span className="text-[9px] text-accent">ACTIVE: 07</span>
        </div>

        <div className="space-y-1">
          <KernelModule name="NEXT_JS_CORE" version="v14.1.0" load={95} />
          <KernelModule name="REACT_DOM" version="v18.2" load={90} />
          <KernelModule name="TAILWIND_CSS" version="v3.4" load={100} />
          <KernelModule name="FRAMER_MOTION" version="v11.0" load={85} />
          <KernelModule name="NODE_RUNTIME" version="v20.0" load={75} />
          <KernelModule name="POSTGRES_DB" version="LATEST" load={60} />
          <KernelModule name="FAST_API" version="LATEST" load={70} />
        </div>
      </div>

      <div className="p-6 bg-neutral-900/20">
        <TechLabel className="mb-2">LIVE_LOGS</TechLabel>
        <div className="border border-neutral-800 bg-neutral-950 p-2 font-mono text-xs relative">

          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0),rgba(255,255,255,0)_50%,rgba(0,0,0,0.2)_50%,rgba(0,0,0,0.2))] bg-[size:100%_4px] pointer-events-none opacity-20" />

          <TerminalLog />

          <div className="mt-3 flex items-end justify-between h-8 gap-1 opacity-50">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="w-full bg-accent"
                animate={{ height: ["10%", "80%", "30%", "100%", "40%"] }}
                transition={{
                  duration: 0.5 + Math.random(),
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: Math.random() * 0.5
                }}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-[9px] text-neutral-600">CPU_THREAD_01</span>
          <span className="text-[9px] text-accent animate-pulse">PROCESSING</span>
        </div>
      </div>

      <div className="absolute top-1/2 -left-3 flex-col gap-1 hidden lg:flex">
        {[...Array(5)].map((_, i) => <div key={i} className="w-2 h-px bg-neutral-700" />)}
      </div>
    </aside>
  );
};

const BlueprintCard = ({ project, index }) => {
  return (
    <div className="relative p-4 group">
      <div className="absolute -left-5 top-0 h-full flex flex-col items-center py-2 z-10 opacity-60 group-hover:opacity-100 transition-opacity duration-500">

        <div className="w-3 h-[1px] bg-neutral-600 group-hover:bg-accent transition-colors" />

        <div className="w-[1px] flex-1 border-l border-dashed border-neutral-700 group-hover:border-accent/50 transition-colors" />
        <div className="py-3 flex items-center justify-center">
          <span className="text-[8px] font-mono text-neutral-600 group-hover:text-accent -rotate-90 whitespace-nowrap tracking-widest transition-colors">
            400PX
          </span>
        </div>
        <div className="w-[1px] flex-1 border-l border-dashed border-neutral-700 group-hover:border-accent/50 transition-colors" />

        <div className="w-3 h-[1px] bg-neutral-600 group-hover:bg-accent transition-colors" />
        <div className="absolute right-0 top-0 h-full flex flex-col justify-between py-2 pr-1">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`h-[1px] bg-neutral-800 group-hover:bg-accent/30 transition-colors ${i % 5 === 0 ? "w-2" : "w-1"}`}
            />
          ))}
        </div>

      </div>

      <DrawBorder className="h-full bg-neutral-900/20">
        <div className="p-1 h-full flex flex-col relative overflow-hidden">
          <div className="relative w-full aspect-video mb-2">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
            />

          </div>

          <h3 className="text-xl text-white font-mono font-bold uppercase tracking-tighter">
            {project.title}
          </h3>
          <div className="w-full h-px bg-neutral-800 my-2 group-hover:bg-accent/30 transition-colors" />
          <p className="text-xs text-neutral-500 font-mono leading-relaxed flex-grow">
            {project.description}
          </p>

          <div className="flex gap-2 mt-4">
            <TechButton href={project.githubLink} label="SRC" icon={GitHubIcon} />
            <TechButton href={project.liveLink} label="EXECUTE" icon={GlobeIcon} highlight />
          </div>
        </div>
      </DrawBorder>
    </div>
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full relative flex flex-col items-center pt-10 pb-20 px-4 md:px-10">

      <div className="fixed inset-0 tech-grid-bg z-[-1]" />
      <div className="scanline" />

      <div className="w-full max-w-7xl border border-neutral-800 bg-[#050505] relative shadow-2xl">

        <header className="h-12 border-b border-neutral-800 flex items-center justify-between px-4 bg-neutral-900/50">
          <div className="flex items-center gap-2">
            <div className="size-1 bg-accent animate-pulse rounded-full" />
            <span className="text-xs text-neutral-400 tracking-widest">SYSTEM_READY</span>
          </div>
          <div className="text-[10px] text-neutral-600 font-mono hidden sm:block">
            V.2.5.0 // STABLE BUILD
          </div>
        </header>

        <div className="grid grid-cols-12 border-b border-neutral-800">
          <Hero />
          <Sidebar />
        </div>

        <div className="py-8 px-6 md:px-12 border-b border-neutral-800 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-white">PROJECT_INDEX</h2>
          <div className="h-px flex-grow bg-neutral-800" />
          <span className="text-accent text-xs">Directory Listing</span>
        </div>

        <section className="p-6 md:p-12 bg-neutral-950/50">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <BlueprintCard key={project.id || idx} project={project} index={idx} />
            ))}
          </div>
        </section>

        <section className="p-6 md:p-12 bg-neutral-950/50">
          <Writing />
        </section>
        <section className="p-6 md:p-12 bg-neutral-950/50">
          <Skills />
        </section>
        <footer className="h-8 border-t border-neutral-800 bg-neutral-900 flex items-center justify-between px-4 text-[9px] text-neutral-500 uppercase tracking-widest">
          <span>Memory: 128GB</span>
          <span>Render: 10ms</span>
          <span>Auth: User</span>
        </footer>
      </div>

    </main>
  );
}