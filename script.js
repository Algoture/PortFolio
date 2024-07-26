document.addEventListener("DOMContentLoaded", function () {
  const scroller = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
  });
  gsap.registerPlugin(ScrollTrigger);
  scroller.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length
        ? scroller.scrollTo(value, 0, 0)
        : scroller.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => scroller.update());
  ScrollTrigger.refresh();
  // gsap.to("#mainTitle", {
  //   scrollTrigger: {
  //     trigger: "#mainTitle",
  //     scroller: "[data-scroll-container]",
  //     markers: false,
  //     scrub: 1,
  //     start: "top 30%",
  //     end: "bottom 20%",
  //     ease: "power1.inOut",
  //   },
  //   x: 100,
  //   duration: 4,
  // });
  // gsap.from("#arrowsvg", {
  //   scrollTrigger: {
  //     trigger: "#arrowsvg",
  //     scroller: "[data-scroll-container]",
  //     markers: false,
  //     scrub: 1,
  //     start: "top 90%",
  //     end: "bottom 20%",
  //     ease: "power1.inOut",
  //   },
  //   rotate: 90,
  // });
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval = null;
let sound = new Audio("Sound2.wav");
let soundEnabled = false;

document.querySelector("#name").onmouseover = (event) => {
  let iteration = 0;
  clearInterval(interval);
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iteration >= event.target.dataset.value.length) {
      clearInterval(interval);
    }
    iteration += 1 / 3;
  }, 40);
  if (soundEnabled) {
    sound.play().catch((error) => {
      console.error("Audio play failed:", error);
    });
  }
};

const nameElement = document.querySelector("#name");
nameElement.dataset.value = nameElement.innerText;

// Sound :
const soundButton = document.querySelector("#soundButton");
const soundsvg = document.querySelector("#soundSVG").querySelector("use");
soundButton.addEventListener("click", () => {
  soundEnabled = !soundEnabled;
  const currentHref = soundsvg.getAttribute("xlink:href");
  soundsvg.setAttribute(
    "xlink:href",
    currentHref === "Icons.svg#soundOff"
      ? "Icons.svg#soundOn"
      : "Icons.svg#soundOff"
  );
});
