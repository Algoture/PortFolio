import { motion } from "framer-motion";
import { projects } from "../Utils/Data";
import "./ProjectCards.css";
import Image from "next/image";
import Link from "next/link";
import { GitHubIcon } from "./Icons";

const ProjectCard = () => {
  return (
    <div className="project-grid">
      {projects.map((project) => {
        const isPng = project.image.toLowerCase().endsWith(".png");
        return (
          <motion.div
            initial={{ y: -10 }}
            whileInView={{ y: 10 }}
            viewport={{ margin: "-100px" }}
            transition={{
              ease: "linear",
              duration: 1,
            }}
            key={project.id}
            className="project-card"
          >
            <div className="card-header">
              <h3>{project.title}</h3>
            </div>
            <p className="description">{project.description}</p>
            <div className="tech-stack">
              <ul>
                {project.techStack.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="links">
              <Link
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon className="" width={17} height={17} />
                Source
              </Link>
              <Link
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo
              </Link>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
