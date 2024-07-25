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
  gsap.to("#whoIam", {
    scrollTrigger: {
      trigger: "#whoIam",
      scroller: "[data-scroll-container]",
      markers: false,
      scrub: 1,
      start: "top 30%",
      end: "bottom 20%",
      ease: "power1.inOut",
    },
    x: 100,
  });
  gsap.from("#mainTitle", {
    scrollTrigger: {
      trigger: "#mainTitle",
      scroller: "[data-scroll-container]",
      markers: false,
      scrub: 1,
      start: "top 30%",
      end: "bottom 20%",
      ease: "power1.inOut",
    },
    x: 100,
    duration: 4,
  });
});
