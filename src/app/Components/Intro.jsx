"use client";
import Link from "next/link";

const Intro = () => {
  return (
    <main className="mainBg">
      <p id="mainTitle" className="reveal-type">
        Hi<span className="redMain"> !</span> I&apos;m{" "}
        <span data-value="Umesh" id="name">
          Umesh
        </span>
        <br />
      </p>
      <p id="whoIam">Full Stack Design Developer</p>
    </main>
  );
};

export default Intro;
