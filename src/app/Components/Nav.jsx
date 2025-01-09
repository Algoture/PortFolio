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
    target: "_blank",
    Icon: GitHubIcon,
  },
  {
    href: "/terminal",
    Icon: TerminalIcon,
  },
  {
    href: "https://x.com/umeshn22",
    target: "_blank",
    Icon: TwitterIcon,
  },
  {
    href: "/",
    Icon: HomeIcon,
  },
  {
    href: "https://www.instagram.com/2.0_27/",
    target: "_blank",
    Icon: InstaIcon,
  },
  {
    href: "https://www.linkedin.com/in/umesh27/",
    target: "_blank",
    Icon: LinkedInIcon,
  },
  {
    href: "https://discord.com/users/790565393659330591",
    target: "_blank",
    Icon: DiscordIcon,
  },
];

const Nav = () => {
  return (
    <section id="dock">
      <nav>
        {links.map(({ href, target, Icon }, index) => (
          <Link
            key={index}
            className=""
            href={href}
            target={target || undefined}
          >
            <Icon className="size-7" />
          </Link>
        ))}
      </nav>
    </section>
  );
};

export default Nav;
