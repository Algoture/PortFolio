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
        <p className="projectTitle">{name}</p>
        <p className="projectDescription">{desc}</p>
      </div>
      <div className="projectLinks">
        <LinkWithIcon to={github} svg="github" />
        <LinkWithIcon to={live} svg="Globe" />
      </div>
    </div>
  );
};

export default ProjectsCard;
