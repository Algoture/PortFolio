"use client";

import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import ProjectCard from "./Components/ProjectCard";

const MainBody = () => {
  return (
    <div>
      <Intro />
      <AboutMe />
      <p className="projectIntro">Projects</p>
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default MainBody;
