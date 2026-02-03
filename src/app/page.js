"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

import { GitHubIcon, GlobeIcon } from "../app/Components/Icons";
import { projects } from "@/app/Utils/Data";
import { Callout } from "./Components/TechUI";
import Writing from "./Components/Writing";
import Skills from "./Components/Skills";



const TechButton = ({ href, label, icon: Icon, highlight }) => (
  <Link
    href={href}
    target="_blank"
    className={`
      group flex items-center gap-2 p-2 text-xs font-bold border transition-all duration-300
      ${highlight
        ? "border-accent bg-accent/10 text-accent hover:bg-accent hover:text-black"
        : "border-neutral-700 text-neutral-400 hover:border-neutral-400 hover:text-white"}
    `}
  >
    {Icon && <Icon className="size-4" />}
    {label}
  </Link>
);

const Hero = () => {
  return (
    <section className="col-span-12 lg:col-span-8 relative p-10 min-h-[60vh] border-r border-neutral-800 flex flex-col justify-center">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] pointer-events-none" />
      <div className="absolute top-10 left-10 right-12">
        <div className="flex justify-between md:w-1/2 text-[9px] text-neutral-500 font-mono mb-1">
          <span>0.00</span>
          <span>WIDTH: AUTO</span>
          <span>100.00</span>
        </div>
        <div className="md:w-1/2 h-px bg-neutral-700 relative">
          <div className="absolute left-0 -top-1 w-px h-3 bg-neutral-700" />
          <div className="absolute right-0 -top-1 w-px h-3 bg-neutral-700" />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative pt-8"
      >
        <Callout text="Design Engineer" className="-top-5 -left-4" />

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
        <div className="absolute -left-[3px] top-0 w-[5px] h-[5px] bg-accent" />
        <p className="text-xl text-neutral-400 font-mono">
          {"// ARCHITECTING DIGITAL SOLUTIONS"} <br />
        </p>
      </div>

    </section>
  );
};


const BlueprintCard = ({ project, index }) => {
  return (
    <div className="relative p-4 b group">
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

      <div className="h-full border border-muted/50 p-2 flex flex-col relative overflow-hidden">
        <div className="relative w-full aspect-video mb-2">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
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
          <TechButton href={project.liveLink} label="Live" icon={GlobeIcon} highlight />
        </div>
      </div>
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
          </div>
          <div className="text-[10px] text-neutral-600 font-mono hidden sm:block">
            {"V.2.5.0 // STABLE BUILD"}
          </div>
        </header>

        <Hero />
        <div className="grid grid-cols-2 border-b border-neutral-800">
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
        <footer className="h-8 border-t border-neutral-800 bg-neutral-900 flex items-center justify-between px-4 text-[9px] text-neutral-500 uppercase tracking-widest">
          <span>Memory: 128GB</span>
          <span>Render: 10ms</span>
          <span>Auth: User</span>
        </footer>
      </div>

    </main>
  );
}