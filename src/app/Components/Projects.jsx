"use client";
import { GitHubIcon, GlobeIcon } from "./Icons";
import { projects, transition, variants } from "../Utils/Data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  return (
    <section className="my-4">
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        variants={variants}
        className="dark:text-white text-black md:pl-10 pl-5 text-3xl font-semibold ">
        Projects
      </motion.h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:px-10 px-5">
        {projects.map((project) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.04 }}
              variants={variants}
              key={project.id}
              className="dark:bg-zinc-950 bg-card z-0 border-lightborder dark:border-stroke border flex flex-col  rounded-lg">
              <span className="absolute w-[40%] -bottom-px  left-0  h-px bg-gradient-to-r from-gray-500/0 via-accent to-gray-500/0 dark:from-gray-400/0 dark:via-accent/50 dark:to-gray-400/0"></span>
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                width={300}
                height={200}
                className="size-full aspect-video rounded-t-lg object-fill"
              />
              <div className="flex flex-col gap-2 px-2 pb-2">
                <div>
                  <p className="dark:text-white text-gray-800 text-xl tracking-tight font-semibold">
                    {project.title}
                  </p>
                  <p className="text-muted dark:text-[#A1A1A1] text-sm leading-4">
                    {project.description}
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="px-1.5 py-0.5 border-lightborder dark:border-stroke border text-xs bg-gray-100 dark:bg-darkBg dark:text-neutral-200  text-neutral-800 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center cursor-pointer gap-1 md:text-xs text-sm font-semibold px-2 py-1 rounded-md bg-accent z-20 shadow-sh2 dark:text-slate-900 text-slate-800">
                    <GitHubIcon
                      className="fill-slate-800 md:size-4 size-5"
                      width={17}
                      height={17}
                    />
                    Source
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex items-center cursor-pointer gap-1 md:text-xs text-sm font-semibold px-2 py-1 rounded-md bg-accent z-20 shadow-sh2 dark:text-slate-950 text-slate-800">
                    <GlobeIcon
                      width={17}
                      height={17}
                      className=" md:size-4 size-5"
                    />
                    Website
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
