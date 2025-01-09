import Link from "next/link";
import React from "react";
import {
  DiscordIcon,
  GitHubIcon,
  HomeIcon,
  InstaIcon,
  LinkedInIcon,
  TerminalIcon,
  TwitterIcon,
} from "./Icons";

const Nav = () => {
  return (
    <section id="dock">
      <nav>
        <Link
          className="dock-link"
          href="https://github.com/Algoture"
          target="_blank"
        >
          <GitHubIcon className="dock-icon" />
        </Link>
        <Link className="dock-link" href="/terminal">
          <TerminalIcon className="dock-icon" />
        </Link>
        <Link
          className="dock-link"
          href="https://x.com/umeshn22"
          target="_blank"
        >
          <TwitterIcon className="dock-icon" />
        </Link>
        <Link className="dock-link" href="/">
          <HomeIcon className="dock-icon" />
        </Link>
        <Link
          className="dock-link"
          href="https://www.instagram.com/2.0_27/"
          target="_blank"
        >
          <InstaIcon className="dock-icon" />
        </Link>
        <Link
          className="dock-link"
          href="https://www.linkedin.com/in/umesh27/"
          target="_blank"
        >
          <LinkedInIcon className="dock-icon" />
        </Link>
        <Link
          className="dock-link"
          href="https://discord.com/users/790565393659330591"
          target="_blank"
        >
          <DiscordIcon className="dock-icon" />
        </Link>
      </nav>
    </section>
  );
};

export default Nav;
