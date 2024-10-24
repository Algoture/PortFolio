import LinkWithIcon from "./LinkWithIcon";
const ProjectsCard = ({ name, img, alt, desc, github, live }) => {
  const isPng = img.toLowerCase().endsWith(".png");
  return (
    <div className="card">
      <div className="card-inner">
        <div className="box">
          <div className="imgBox">
            {isPng ? (
              <img src={img} alt={alt} />
            ) : (
              <video autoPlay muted loop src={img}>
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </div>
      </div>
      <div className="projectDetails">
        <div className="projectsInfoLinks">
          <p className="projectTitle">{name}</p>
          <div className="projectLinks">
            <LinkWithIcon to={github} svg="github" />
            <LinkWithIcon to={live} svg="Globe" />
          </div>
        </div>
        <p className="projectDesc">{desc}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
