"use client";
import { GitHubIcon, GlobeIcon } from "./Icons";
import { projects, transition, variants } from "../Utils/Data";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = () => {
  
  return (
    <>
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={transition}
        variants={variants}
        className="text-white pl-8 text-3xl font-semibold my-1">
        Projects
      </motion.h1>
      <div className="project-grid px-8">
        {projects.map((project) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.04 }}
              variants={variants}
              key={project.id}
              className="project-card flex flex-col gap-3  rounded-lg">
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                width={300}
                height={200}
                className="size-full rounded-t-lg object-fill"
              />
              <div className="flex flex-col gap-2 px-2 pb-2">
                <div>
                  <p className="text-white text-lg tracking-tight font-semibold">
                    {project.title}
                  </p>
                  <p className="text-[#a3a3a3] text-sm leading-4">
                    {project.description}
                  </p>
                </div>
                <div className="">
                  <ul className="text-slate-400 flex flex-wrap gap-3">
                    {project.techStack.map((tech, index) => (
                      <li
                        key={index}
                        className="px-1.5 py-0.5 text-xs bg-slate-100  text-gray-950 rounded-md">
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="projectlink">
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
                    className="projectlink">
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

export default ProjectCard;
