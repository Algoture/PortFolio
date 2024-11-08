"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import {
  GitHubIcon,
  InstaIcon,
  LinkedInIcon,
  TerminalIcon,
  TwitterIcon,
} from "./Icons";
import { MouseProvider } from "./MouseProvider";
import DockItem from "./DockItem";
import "./Dock.css";

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
      <footer className="dock-footer">
        <DockContext.Provider value={{ hovered, width }}>
          <nav
            ref={ref}
            className="dock-nav"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
          >
            <ul className="dock-ul">
              <DockItem>
                <a
                  className="dock-link"
                  href="https://github.com/Algoture"
                  target="_blank"
                >
                  <GitHubIcon className="dock-icon" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="dock-link"
                  href="https://umeshnagare.vercel.app/terminal"
                  target="_blank"
                >
                  <TerminalIcon className="dock-icon" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="dock-link"
                  href="https://x.com/lemniscatedd"
                  target="_blank"
                >
                  <TwitterIcon className="dock-icon" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="dock-link"
                  href="https://www.instagram.com/2.0_27/"
                  target="_blank"
                >
                  <InstaIcon className="dock-icon" />
                </a>
              </DockItem>
              <DockItem>
                <a
                  className="dock-link"
                  href="https://www.linkedin.com/in/umesh27/"
                  target="_blank"
                >
                  <LinkedInIcon className="dock-icon" />
                </a>
              </DockItem>
            </ul>
          </nav>
        </DockContext.Provider>
      </footer>
    </MouseProvider>
  );
};

export default Dock;
