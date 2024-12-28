"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  GitHubIcon,
  InstaIcon,
  LinkedInIcon,
  TerminalIcon,
  TwitterIcon,
  DiscordIcon,
  HomeIcon,
} from "./Icons";
import { MouseProvider } from "./MouseProvider";
import DockItem from "./DockItem";
import "./Dock.css";
import Link from "next/link";
const DockContext = createContext(null);

export const useDock = () => {
  return useContext(DockContext);
};

const Dock = () => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(ref?.current?.clientWidth);
  }, []);

  return (
    <MouseProvider>
      <nav className="dock-footer">
        <DockContext.Provider value={{ hovered, width }}>
          <nav
            ref={ref}
            className="dock-nav"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <ul className="dock-ul">
              <DockItem>
                <Link
                  className="dock-link"
                  href="https://github.com/Algoture"
                  target="_blank"
                >
                  <GitHubIcon className="dock-icon" />
                </Link>
              </DockItem>
              <DockItem>
                <Link className="dock-link" href="/terminal">
                  <TerminalIcon className="dock-icon" />
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  className="dock-link"
                  href="https://x.com/lemniscatedd"
                  target="_blank"
                >
                  <TwitterIcon className="dock-icon" />
                </Link>
              </DockItem>
              <DockItem>
                <Link className="dock-link" href="/">
                  <HomeIcon className="dock-icon" />
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  className="dock-link"
                  href="https://www.instagram.com/2.0_27/"
                  target="_blank"
                >
                  <InstaIcon className="dock-icon" />
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  className="dock-link"
                  href="https://www.linkedin.com/in/umesh27/"
                  target="_blank"
                >
                  <LinkedInIcon className="dock-icon" />
                </Link>
              </DockItem>
              <DockItem>
                <Link
                  className="dock-link"
                  href="https://discord.com/users/790565393659330591"
                  target="_blank"
                >
                  <DiscordIcon className="dock-icon" />
                </Link>
              </DockItem>
            </ul>
          </nav>
        </DockContext.Provider>
      </nav>
    </MouseProvider>
  );
};

export default Dock;
