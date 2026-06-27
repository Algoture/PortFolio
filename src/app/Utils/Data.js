export const headerInfo = {
  name: "Umesh Nagare",
  role: "Engineer"
};

export const bioParagraphs = [
  [
    { text: "I build software, write articles, and solve backend problems." }
  ],
  [
    { text: "You can find me on " },
    { text: "GitHub", href: "https://github.com/Algoture" },
    { text: ", " },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/umesh27/" },
    { text: ", " },
    { text: "X", href: "https://x.com/umeshn22" },
    { text: ", or reach me via " },
    { text: "email", href: "mailto:umesh@umeshnagare.com" },
    { text: "." }
  ]
];

export const projects = [
  {
    id: 0, 
    title: "Photowa",
    description: "Conversational design studio built with an automated image-generation pipeline",
    liveLink: "https://photowa.com",
    year: "2026",
    tech: ["FastAPI", "MongoDB", "Redis", "Next.js"]
  },
  {
    id: 1,
    title: "AstroYantra",
    description: "High-precision astronomical API engine computing planetary coordinates",
    liveLink: "https://astroyantra.siyoltechnologies.com",
    year: "2026",
    tech: ["Redis", "MySQL", "FastAPI", "Next.js", "Docker Compose"]
  },
  {
    id: 2,
    title: "Reelvo",
    description: "Instagram marketing automation and scheduling tool managing background tasks",
    liveLink: "https://www.reelvo.in",
    year: "2025",
    tech: ["Flask", "MySQL", "Next.js", "Tanstack Query"]
  }
];

export const writings = [
  {
    link: "https://umeshrenders.hashnode.dev/understanding-csr-and-ssr-a-simple-guide",
    title: "Understanding CSR and SSR",
    date: "20/04",
    year: "2025",
    isNew: true
  },
  {
    link: "https://umeshthreads.hashnode.dev/threads-and-processes-in-cpu",
    title: "Threads and Processes in CPU",
    date: "08/03",
    year: "2025",
    isNew: false
  }
];

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
