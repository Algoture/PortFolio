import { sociaLinks } from "../Data";
import LinkWithIcon from "./LinkWithIcon";

const NavBar = () => {
  return (
    <nav>
      <div className="navbar">
        <a href="" className="projecthref">
          Home
        </a>
        <div className="socialLinks">
          {sociaLinks.map((social) => (
            <LinkWithIcon key={social.id} to={social.link} svg={social.svg} />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
