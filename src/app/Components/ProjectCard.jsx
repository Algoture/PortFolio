"use client";
import { GitHubIcon, GlobeIcon } from "./Icons";
import { projects } from "../Utils/Data";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <>
      <motion.h1
        initial={{ opacity: 0, y: 0 }}
        whileInView={{ opacity: 1, y: 5 }}
        className="text-white pl-4 text-3xl font-semibold my-1"
      >
        Projects
      </motion.h1>
      <div className="project-grid px-4">
        {projects.map((project) => {
          return (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 5 }}
              viewport={{ margin: "10px" }}
              key={project.id}
              className="project-card flex flex-col gap-3 rounded-lg"
            >
              <div>
                <p className="text-white text-xl font-bold">{project.title}</p>
                <p className="text-slate-300 text-sm">{project.description}</p>
              </div>
              <div className="">
                <ul className="text-slate-400 flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <li
                      key={index}
                      className="px-2 py-1 text-xs border text-slate-300 rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex gap-2">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="projectlink"
                >
                  <GitHubIcon className="fill-slate-800" width={17} height={17} />
                  Source
                </Link>
                <Link
                  href={project.liveLink}
                  target="_blank"
                  className="projectlink"
                >
                  <GlobeIcon width={17} height={17} />
                  Website
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default ProjectCard;
