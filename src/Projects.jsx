import ProjectsCard from "./Components/ProjectsCard";
import SvgIcon from "./Components/SvgIcon";
import projects from "./Data";
const Projects = () => {
  return (
    <section id="projectSection">
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
