"use client";
import { useState } from "react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "./Icons";
import clsx from "clsx";
import { links } from "../Utils/NavIcons";

const Nav = () => {
  const [dark, setDark] = useState(false);
  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
  };

  return (
    <div className="fixed bottom-2 right-1/2 transform translate-x-1/2 z-40">
      <nav className="flex px-2.5 py-2 gap-3 rounded-lg bg-white/45 border-white/20 border backdrop-blur-md dark:bg-black/35 shadow-sh">
        {links.map(({ href, target, Icon, name }, index) => (
          <Link key={index} href={href} target={target} aria-label={name}>
            {Icon}
          </Link>
        ))}
        <div className="border-l-2 border-accent flex items-center pl-2">
          <button
            onClick={() => darkModeHandler()}
            aria-label="Dark Mode Toggle"
            className={clsx(
              "cen transition-all focus:outline-hidden cursor-pointer",
              dark ? "rotate-0" : "rotate-90"
            )}>
            {dark ? (
              <MoonIcon className="md:size-6 size-8 fill-black dark:fill-white" />
            ) : (
              <SunIcon className="md:size-6 size-8 fill-black dark:fill-white" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
