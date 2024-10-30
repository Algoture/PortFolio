import React, { useEffect, useRef } from "react";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Projects from "./Projects";

const MainBody = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new window.LocomotiveScroll({
      el: scrollContainerRef.current,
      smooth: true,
    });
    return () => locomotiveScroll.destroy();
  }, []);

  return (
    <div data-scroll-container ref={scrollContainerRef}>
      <Intro />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  );
};

export default MainBody;
