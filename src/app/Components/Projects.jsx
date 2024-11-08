import ProjectsCard from "./ProjectsCard";
import {projects} from "../Utils/Data";
const Projects = () => {
  return (
    <section id="projectSection">
      <p className="projectIntro">Some Things I’ve Built</p>
      <div className="projectContainer">
        {projects.map((project) => (
          <ProjectsCard
            key={project.id}
            name={project.title}
            img={project.image}
            desc={project.description}
            live={project.liveLink}
            github={project.githubLink}
            alt={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
