"use client";
import { GitHubIcon, GlobeIcon } from "./Icons";
import { projects, transition, variants } from "../Utils/Data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Projects = () => {
  
  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        variants={variants}
        className="dark:text-white text-black md:pl-8 pl-4 text-3xl font-semibold my-1">
        Projects
      </motion.h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:px-8 px-4">
        {projects.map((project) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.04 }}
              variants={variants}
              key={project.id}
              className="dark:bg-zinc-900 bg-card z-0  border-lightborder dark:border-stroke border flex flex-col  rounded-lg">
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
                  <p className="text-neutral-600 dark:text-[#999999] text-sm leading-4">
                    {project.description}
                  </p>
                </div>
                <div>
                  <ul className="flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="px-1.5 py-0.5 text-xs bg-gray-200 dark:bg-gray-100  text-neutral-800 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center cursor-pointer gap-1 md:text-xs text-sm font-semibold px-2 py-1 rounded-md bg-accent z-20 text-slate-800">
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
                    className="flex items-center cursor-pointer gap-1 md:text-xs text-sm font-semibold px-2 py-1 rounded-md bg-accent z-20 text-slate-800">
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
    </>
  );
};

export default Projects;
