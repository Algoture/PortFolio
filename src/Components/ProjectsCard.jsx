const ProjectsCard = ({ name, img, alt }) => {
  return (
    <div className="card">
      <div className="card-inner">
        <div className="box">
          <div className="imgBox">
            <img src={img} alt={alt} />
          </div>
        </div>
      </div>
      <div className="projectDetails">
        <p className="projectTitle">{name}</p>
      </div>
    </div>
  );
};

export default ProjectsCard;
