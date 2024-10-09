import ProjectsCard from "./Components/ProjectsCard";
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
            alt={project.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
