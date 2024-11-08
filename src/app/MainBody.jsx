"use client";
import React, { useEffect, useRef } from "react";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const MainBody = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    if (scrollContainerRef.current) {
      const scroll = new LocomotiveScroll({
        el: scrollContainerRef.current,
        smooth: true,
      });
      return () => {
        scroll.destroy();
      };
    }
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
