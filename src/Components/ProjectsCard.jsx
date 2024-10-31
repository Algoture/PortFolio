import { motion } from "framer-motion";
import LinkWithIcon from "./LinkWithIcon";
const ProjectsCard = ({ name, img, alt, desc, github, live }) => {
  const isPng = img.toLowerCase().endsWith(".png");
  return (
    <motion.div
      initial={{ y: -10 }}
      whileInView={{ y: 10 }}
      viewport={{ margin: "-100px" }}
      transition={{
        ease: "linear",
        duration: 1,
        // y: { duration: 1 },
      }}
      // onViewportEnter={() => console.log("View Enter")}
      // onViewportLeave={() => console.log("View Leave")}
      className="card"
    >
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
    </motion.div>
  );
};

export default ProjectsCard;
