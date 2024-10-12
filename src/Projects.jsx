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
        <div className="card">
          <div className="card-inner">
            <div className="box">
              <div className="imgBox">
                <video autoPlay muted loop src="BeatBlend.mp4"> </video>
              </div>
            </div>
          </div>
          <div className="projectDetails">
            <p className="projectTitle">Beat Blend</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
