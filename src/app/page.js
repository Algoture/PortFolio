"use client";
import Link from "next/link";
import { projects, socialLinks } from "@/app/Utils/Data";
import Writing from "./Components/Writing";
import { ProgressiveBlur } from "./Components/ProgressiveBlur";
import ThemeToggle from "./Components/ThemeToggle";
import Hero from "./Components/Hero";

export default function Home() {
  return (
    <main className="min-h-screen w-full antialiased selection:bg-accent/30">
      <ThemeToggle />
      <section className="w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="w-full mt-5 border border-neutral-200 dark:border-neutral-900/60 bg-white dark:bg-[#060606]">
          <Hero />
          <section className="mt-10 p-5">
            <header className="flex items-end justify-between mb-10">
              <div className="space-y-1">
                <p className="text-accent text-[10px] font-bold uppercase tracking-widest">Selected Work</p>
                <h2 className="text-3xl font-semibold tracking-tight">Showcase</h2>
              </div>
              <div className="text-[10px] font-mono text-neutral-400">INDEX [0{projects.length}]</div>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project, i) => (
                <Link
                  key={i}
                  href={project.liveLink}
                  target="_blank"
                  // style={{ "--project": project.primaryColor }}
                  className="group relative flex flex-col justify-between p-8 min-h-[250px] rounded-2xl bg-neutral-100 dark:bg-neutral-900/40 transition-colors duration-500 ease-out overflow-hidden"
                >
                  <div className="project-tint absolute -right-10 -top-10 size-32 bg-[color:var(--project)]/30 opacity-0 blur-[80px] group-hover:opacity-50 transition-opacity duration-400" />

                  <div className="relative z-10 flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-semibold tracking-tight transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="p-2 rounded-full bg-white dark:bg-black border border-neutral-200 dark:border-neutral-800 group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.64645 11.3536L11.3536 3.64645M11.3536 3.64645H3.5V2.5H12.5V11.5H11.3536V3.64645Z" fill="currentColor" />
                      </svg>
                    </div>
                  </div>

                  <div className="relative z-10 ">
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack?.map((tech) => (
                        <span
                          key={tech}
                          className="text-[9px] px-2 py-1 rounded-full border border-neutral-200/70 dark:border-neutral-800/80 text-neutral-600 dark:text-neutral-400 font-semibold uppercase tracking-widest"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>

          <section className="pt-10 px-5">
            <div className="flex items-center gap-4 mb-10">
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-400">Journal & Perspectives</h2>
              <div className="h-[1px] flex-grow bg-neutral-100 dark:bg-neutral-900" />
            </div>
            <Writing />
          </section>
        </div>

        <footer className="mb-10 border-t border-neutral-100 dark:border-neutral-900 bg-neutral-50/50 dark:bg-[#080808]">
          <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2 md:gap-10">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-accent transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </footer>
      </section>
      <ProgressiveBlur position="bottom" height="15%" />
    </main>
  );
}
