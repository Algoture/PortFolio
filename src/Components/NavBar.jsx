const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <button id="soundButton">
          <svg id="soundSVG" width={35} height={35} fill="black">
            <use xlinkHref="Icons.svg#soundOff" />
          </svg>
        </button>
        <a href="" className="projecthref">
          Home{" "}
        </a>
        <div className="socialLinks">
          <a
            href="https://www.instagram.com/2.0_27/"
            target="_blank"
            className="iconBox"
          >
            <svg className="svgIcon" width={30} height={30} fill="black">
              <use xlinkHref="Icons.svg#Instagram" />
            </svg>
          </a>
          <a
            href="https://github.com/Algoture"
            target="_blank"
            className="iconBox"
          >
            <svg className="svgIcon" width={30} height={30} fill="black">
              <use xlinkHref="Icons.svg#github" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/umesh27/"
            target="_blank"
            className="iconBox"
          >
            <svg className="svgIcon" width={30} height={30} fill="black">
              <use xlinkHref="Icons.svg#linkedIn" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
