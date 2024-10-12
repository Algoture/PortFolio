import SvgIcon from "../Components/SvgIcon";

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
              <video autoPlay muted loop src={img} >
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
        <a href={github} target="_blank" className="iconBox">
          <SvgIcon id="" svg="github" />
        </a>
        <a href={live} target="_blank" className="iconBox">
          <SvgIcon id="" svg="Globe" />
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
