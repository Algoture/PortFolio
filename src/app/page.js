"use client";
import ThemeToggle from "./Components/ThemeToggle";
import Hero from "./Components/Hero";
import Writing from "./Components/Writing";
import { projects } from "@/app/Utils/Data";

export default function Home() {
  const projectsByYear = projects.reduce((groups, item) => {
    const year = item.year || "Other";
    if (!groups[year]) {
      groups[year] = [];
    }
    groups[year].push(item);
    return groups;
  }, {});

  const sortedProjectYears = Object.keys(projectsByYear).sort((a, b) => b - a);

  return (
    <main className="min-h-screen w-full antialiased bg-white dark:bg-[#09090b] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      <ThemeToggle />
      <div className="w-full max-w-2xl mx-auto px-6 py-16 md:py-10 space-y-4">
        <Hero />
        
        {/* Projects Section */}
        <section className="w-full pt-4">
          <h2 className="text-[14px] text-neutral-400 dark:text-neutral-500 mb-2 select-none font-sans">
            Projects
          </h2>
          <div className="flex flex-col space-y-1">
            {sortedProjectYears.map((year) => (
              <div key={year} className="contents">
                {projectsByYear[year].map((project, index) => (
                  <div
                    key={project.title}
                    className="grid grid-cols-[3.5rem_1fr] md:grid-cols-[4.5rem_1fr] gap-x-4 py-3.5 text-[14px] font-sans border-b border-neutral-50/50 dark:border-neutral-900/20"
                  >
                    {/* Year - Only show for the first item in the year block */}
                    <div className="text-neutral-400 dark:text-neutral-500 font-sans select-none pt-0.5">
                      {index === 0 ? year : ""}
                    </div>

                    {/* Content Stack */}
                    <div className="min-w-0 flex flex-col">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-900 dark:text-neutral-100 hover:underline hover:decoration-neutral-400 dark:hover:decoration-neutral-600 underline-offset-4 transition-colors font-medium w-fit"
                      >
                        {project.title}
                      </a>
                      <p className="text-neutral-500 dark:text-neutral-400 text-[13px] leading-relaxed mt-1">
                        {project.description}
                      </p>
                      {project.tech && (
                        <div className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500 mt-2 select-none space-x-1.5 leading-none">
                          {project.tech.map((t, idx) => (
                            <span key={t} className="inline-block">
                              {idx > 0 && <span className="mr-1.5 opacity-40 select-none">•</span>}
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <Writing />
      </div>
    </main>
  );
}
