"use client";
import Link from "next/link";
import { links } from "../Utils/NavIcons";

const Nav = () => {
  return (
    <div className="fixed bottom-2 right-1/2 transform translate-x-1/2 z-40">
      <nav className="flex px-2.5 py-2 gap-3 rounded-lg bg-neutral-900/75 border border-neutral-700 backdrop-blur-lg hover:shadow shadow-accent">
        {links.map(({ href, target, Icon, name }, index) => (
          <Link
            key={index}
            className="hover:rotate-12 duration-100 ease-linear"
            href={href}
            target={target}
            aria-label={name}>
            {Icon}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Nav;
