import SvgIcon from "./SvgIcon";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <button id="soundButton">
          <SvgIcon id="soundIcon" svg="soundOff" />
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
            <SvgIcon id="" svg="Instagram" />
          </a>
          <a
            href="https://github.com/Algoture"
            target="_blank"
            className="iconBox"
          >
            <SvgIcon id="" svg="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/umesh27/"
            target="_blank"
            className="iconBox"
          >
            <SvgIcon id="" svg="linkedIn" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
