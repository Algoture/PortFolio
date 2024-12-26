"use client";

import React, { useEffect } from "react";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import dynamic from "next/dynamic";
import "locomotive-scroll/dist/locomotive-scroll.css";
import ProjectCard from "./Components/ProjectCard";

const LocomotiveScroll = dynamic(() => import("locomotive-scroll"), {
  ssr: false,
});

const MainBody = () => {
  useEffect(() => {
    let scrollInstance;

    if (
      typeof window !== "undefined" &&
      document.querySelector("[data-scroll-container]")
    ) {
      import("locomotive-scroll").then((LocomotiveScrollModule) => {
        scrollInstance = new LocomotiveScrollModule.default({
          el: document.querySelector("[data-scroll-container]"),
          smooth: true,
        });
      });
    }

    return () => {
      if (scrollInstance) scrollInstance.destroy();
    };
  }, []);

  return (
    <div data-scroll-container>
      <Intro />
      <AboutMe />
      <p className="projectIntro">Some Things I&apos;ve Built</p>
      <ProjectCard />
      <Footer />
    </div>
  );
};

export default MainBody;
