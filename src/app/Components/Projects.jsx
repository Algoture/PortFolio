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
        className="text-white/80 md:pl-10 pl-5 text-2xl font-semibold ">
        Projects
      </motion.h1>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 md:px-10 px-5">
        {projects.map((project) => {
          return (
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.4 }}
              variants={variants}
              key={project.id}
              className="bg-neutral-900  relative z-0 group hover:border-zinc-500 border-zinc-700 border-dashed border flex flex-col">
              <div className="size-1 group-hover:size-2.5 transform-gpu transition-all ease-out delay-100 duration-300 absolute group-hover:border-accent border-muted/20 -top-px -left-px border-t-[1.5px] border-l-[1.5px]"></div>
              <div className="size-1 group-hover:size-2.5 transform-gpu transition-all ease-out delay-100 duration-300 absolute group-hover:border-accent border-muted/20 -top-px -right-px border-t-[1.5px] border-r-[1.5px]"></div>
              <div className="size-1 group-hover:size-2.5 transform-gpu transition-all ease-out delay-100 duration-300 absolute group-hover:border-accent border-muted/20 -bottom-px -left-px border-b-[1.5px] border-l-[1.5px]"></div>
              <div className="size-1 group-hover:size-2.5 transform-gpu transition-all ease-out delay-100 duration-300 absolute group-hover:border-accent border-muted/20 -bottom-px -right-px border-b-[1.5px] border-r-[1.5px]"></div>

              {/* <span className="absolute w-[40%] -bottom-px  left-0  h-px bg-gradient-to-r from-gray-500/0 via-accent to-gray-500/0 dark:from-gray-400/0 dark:via-accent/50 dark:to-gray-400/0"></span> */}
              <Image
                src={project.image}
                alt={`${project.title} project image`}
                width={300}
                height={200}
                className="size-full aspect-video p-2 object-fill"
              />
              <div className="flex flex-col gap-2 px-2 pb-2">
                <div>
                  <p className="text-white text-xl tracking-tight font-semibold">
                    {project.title}
                  </p>
                  <p className="text-[#737373] text-sm leading-4">
                    {project.description}
                  </p>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={project.githubLink}
                    target="_blank"
                    className="flex items-center cursor-pointer gap-1 md:text-xs text-sm font-semibold px-2 py-1 rounded-md bg-[#3d3d3d] z-20 text-gray-300">
                    <GitHubIcon
                      className="fill-gray-300 md:size-4 size-5"
                      width={17}
                      height={17}
                    />
                    Source
                  </Link>
                  <Link
                    href={project.liveLink}
                    target="_blank"
                    className="flex group items-center cursor-pointer gap-1 md:text-xs text-sm font-semibold px-2 py-1 rounded-md bg-accent z-20 shadow-sh2 text-slate-950">
                    <GlobeIcon
                      width={17}
                      height={17}
                      className="group-hover:animate-spin md:size-4 size-5"
                    />
                    Link
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
