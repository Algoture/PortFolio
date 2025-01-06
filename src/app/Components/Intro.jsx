"use client";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Intro = () => {
  const nameRef = useRef(null);
  const soundRef = useRef(null);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const intervalRef = useRef(null);
  const [soundEnabled, setSoundEnabled] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      soundRef.current = new Audio("Sound2.wav");
    }

    const nameElement = nameRef.current;
    nameElement.dataset.value = nameElement.innerText;

    const handleMouseOver = (event) => {
      let iteration = 0;
      clearInterval(intervalRef.current);
      intervalRef.current = setInterval(() => {
        event.target.innerText = event.target.innerText
          .split("")
          .map((letter, index) =>
            index < iteration
              ? event.target.dataset.value[index]
              : letters[Math.floor(Math.random() * 26)]
          )
          .join("");
        if (iteration >= event.target.dataset.value.length) {
          clearInterval(intervalRef.current);
        }
        iteration += 1 / 4;
      }, 40);

      if (soundEnabled && soundRef.current) {
        soundRef.current
          .play()
          .catch((error) => console.error("Audio play failed:", error));
      }
    };

    nameElement.addEventListener("mouseover", handleMouseOver);

    return () => {
      nameElement.removeEventListener("mouseover", handleMouseOver);
      clearInterval(intervalRef.current);
    };
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled((prev) => !prev);
  };

  return (
    <main className="mainBg">
      <p id="mainTitle" className="reveal-type">
        Hi<span className="redMain"> !</span> I&apos;m{" "}
        <span data-value="Umesh" id="name" ref={nameRef}>
          Umesh
        </span>
        <br />
      </p>
      <p id="whoIam">
        Crafting Clean, <span className="redMain">Minimal</span> Digital
        Solutions as a Full Stack <span className="redMain">Developer</span> &
        UI/UX <span className="redMain">Designer</span>
      </p>
      <button onClick={toggleSound} id="soundButton">
        <svg id="soundIcon" fill="white" width={30} height={30}>
          <use
            xlinkHref={`Icons.svg#${soundEnabled ? "soundOn" : "soundOff"}`}
          />
        </svg>
      </button>
      <Link href="https://x.com/umeshn22" target="_blank" className="btn">
        Let&apos;s Connect
      </Link>
    </main>
  );
};

export default Intro;
