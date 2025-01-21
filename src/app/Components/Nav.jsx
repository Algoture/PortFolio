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
      <nav className="flex px-3 py-2 gap-3 rounded-full bg-accent dark:bg-gray-100 shadow-sh">
        {links.map(({ href, target, Icon }, index) => (
          <Link key={index} href={href} target={target || "_self"}>
            {Icon}
          </Link>
        ))}
        <div className="border-l-2 dark:border-accent flex items-center pl-2">
          <button
            onClick={() => darkModeHandler()}
            className={clsx(
              "cen transition-all rounded-full focus:outline-none",
              dark ? "rotate-0" : "rotate-90"
            )}>
            {dark ? (
              <MoonIcon className="md:size-6 size-8 fill-black" />
            ) : (
              <SunIcon className="md:size-6 size-8 fill-black" />
            )}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
