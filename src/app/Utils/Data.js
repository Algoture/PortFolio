export const projects = [
  {
    id: 1,
    title: "AstroYantra",
    description: "Vedic astrology API platform with Swiss Ephemeris precision",
    githubLink: "https://github.com/Algoture",
    liveLink: "https://astroyantra.siyoltechnologies.com",
    primaryColor: "#f54900",
    techStack: ["Next.js", "FastAPI", "MySQL", "Redis"],
  },
  {
    id: 0,
    title: "Reelvo",
    description: "Instagram automation, scheduling and analytics tool",
    githubLink: "https://github.com/Algoture",
    liveLink: "https://www.reelvo.in",
    primaryColor: "#3981f6",
    techStack: ["Next.js", "Flask", "MySQL", "Tanstack Query"],
  },
  {
    id: 2,
    title: "KrishiNET",
    description: "A platform to connect Farmers with Buyers and Investors.",
    githubLink: "https://github.com/Algoture/KrishiNET",
    liveLink: "https://krishinet.onrender.com/",
    primaryColor: "#70e000",
    techStack: ["Vite.js", "Appwrite", "TailwindCSS"],
  }
];
export const writings = [
  {
    link: "https://umeshthreads.hashnode.dev/threads-and-processes-in-cpu",
    title: "Threads and Processes in CPU",
    date: "Mar 8,2025"
  },
  {
    link: "https://umeshrenders.hashnode.dev/understanding-csr-and-ssr-a-simple-guide",
    title: "Understanding CSR and SSR",
    date: "Apr 20,2025"
  }
]
export const socialLinks = [
  { name: "GitHub", href: "https://github.com/Algoture" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/umesh27/" },
  { name: "X", href: "https://x.com/umeshn22" },
  { name: "Instagram", href: "https://www.instagram.com/2.0_27/" },
  { name: "Discord", href: "https://discord.com/users/790565393659330591" },
];
export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
export const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
};
