import {
  DiscordIcon,
  GitHubIcon,
  InstaIcon,
  LinkedInIcon,
  TwitterIcon,
} from "../Components/Icons";

export const links = [
  {
    href: "https://github.com/Algoture",
    name: "GitHub",
    target: "_blank",
    Icon: <GitHubIcon className="md:size-6 size-7 fill-white" />,
  },
  {
    href: "https://x.com/umeshn22",
    name: "Twitter",
    target: "_blank",
    Icon: <TwitterIcon className="md:size-6 size-7 fill-white" />,
  },
  {
    href: "https://www.instagram.com/2.0_27/",
    name: "Instagram",
    target: "_blank",
    Icon: <InstaIcon className="md:size-6 size-7 fill-white" />,
  },
  {
    href: "https://www.linkedin.com/in/umesh27/",
    name: "LinkedIn",
    target: "_blank",
    Icon: <LinkedInIcon className="md:size-6 size-7 fill-white" />,
  },
  {
    href: "https://discord.com/users/790565393659330591",
    name: "Discord",
    target: "_blank",
    Icon: <DiscordIcon className="md:size-6 size-7 fill-white" />,
  },
];
