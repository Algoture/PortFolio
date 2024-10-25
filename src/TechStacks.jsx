import SvgIcon from "./Components/SvgIcon";

const TechStacks = () => {
  return (
    <div className="techStacks">
      <p className="techStacksIntro">Tech Stacks</p>
      <div className="techStacksContainer">
        <div className="techStacksItem">
          {[
            "html",
            "css",
            "js",
            "React",
            "NodeJS",
            "mongodb",
            "ExpressJS",
            "Firebase",
            "SCSS",
            "Appwrite",
            "gsap",
            "redux",
            "nextjs",
            "ts",
          ].map((tech) => (
            <div key={tech} className="technology">
              <SvgIcon id={tech} svg={tech} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
