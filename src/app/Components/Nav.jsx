"use client";
import Link from "next/link";
import {
  DiscordIcon,
  GitHubIcon,
  HomeIcon,
  InstaIcon,
  LinkedInIcon,
  TerminalIcon,
  TwitterIcon,
} from "./Icons";
import { motion } from "framer-motion";

const links = [
  {
    href: "https://github.com/Algoture",
    name: "GitHub",
    target: "_blank",
    Icon: <GitHubIcon className="md:size-6 size-8 fill-navIcon" />,
  },
  {
    href: "/terminal",
    name: "Terminal",
    Icon: <TerminalIcon className="md:size-6 size-8 fill-navIcon" />,
  },
  {
    href: "https://x.com/umeshn22",
    name: "Twitter",
    target: "_blank",
    Icon: <TwitterIcon className="md:size-6 size-8 fill-navIcon"/>,
  },
  {
    href: "/",
    name: "Home",
    Icon: <HomeIcon className="md:size-6 size-8 "/>,
  },
  {
    href: "https://www.instagram.com/2.0_27/",
    name: "Instagram",
    target: "_blank",
    Icon: <InstaIcon className="md:size-6 size-8 fill-navIcon"/>,
  },
  {
    href: "https://www.linkedin.com/in/umesh27/",
    name: "LinkedIn",
    target: "_blank",
    Icon: <LinkedInIcon className="md:size-6 size-8 fill-navIcon"/>,
  },
  {
    href: "https://discord.com/users/790565393659330591",
    name: "Discord",
    target: "_blank",
    Icon: <DiscordIcon className="md:size-6 size-8 fill-navIcon"/>,
  },
];

const Nav = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };
  return (
    <section id="dock">
      <motion.nav
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {links.map(({ href, target, Icon, name }, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center"
          >
            <Link
              aria-label={name}
              href={href}
              target={target || undefined}
              className="text-gray-800"
            >
              {Icon}
            </Link>
          </motion.div>
        ))}
      </motion.nav>
    </section>
  );
};

export default Nav;
