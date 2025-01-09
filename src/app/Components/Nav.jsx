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

const links = [
  {
    href: "https://github.com/Algoture",
    name: "GitHub",
    target: "_blank",
    Icon: GitHubIcon,
  },
  {
    href: "/terminal",
    name: "Terminal",
    Icon: TerminalIcon,
  },
  {
    href: "https://x.com/umeshn22",
    name: "Twitter",
    target: "_blank",
    Icon: TwitterIcon,
  },
  {
    href: "/",
    name: "Home",
    Icon: HomeIcon,
  },
  {
    href: "https://www.instagram.com/2.0_27/",
    name: "Instagram",
    target: "_blank",
    Icon: InstaIcon,
  },
  {
    href: "https://www.linkedin.com/in/umesh27/",
    name: "LinkedIn",
    target: "_blank",
    Icon: LinkedInIcon,
  },
  {
    href: "https://discord.com/users/790565393659330591",
    name: "Discord",
    target: "_blank",
    Icon: DiscordIcon,
  },
];

const Nav = () => {
  return (
    <section id="dock">
      <nav>
        {links.map(({ href, target, Icon, name }, index) => (
          <Link
            key={index}
            aria-label={name}
            href={href}
            target={target || undefined}
          >
            <Icon className="md:size-7 size-9" />
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Nav;
