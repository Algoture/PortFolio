export const projects = [
  {
    id: 1,
    title: "KrishiNET",
    description: "A platform to connect Farmers with Buyers and Investors.",
    image: "/KrishiNET.png",
    githubLink: "https://github.com/Algoture/KrishiNET",
    liveLink: "https://krishinet.onrender.com/",
    svg: [
      { id: "React", svg: "React.js" },
      { id: "tailwind", svg: "Tailwind CSS" },
      { id: "appwrite", svg: "Appwrite" },
    ],
    techStack: ["React.js", "Tailwind CSS", "Appwrite"],
  },
  {
    id: 2,
    title: "Cinemaven",
    description:
      "An OTT platform to binge watch latest movies trailers and teasers.",
    image: "/Cinemaven.png",
    githubLink: "https://github.com/Algoture/Cinemaven",
    liveLink: "https://cinemavenclient.onrender.com/",
    svg: [
      { id: "React", svg: "React.js" },
      { id: "scss", svg: "SCSS" },
      { id: "firebase", svg: "Firebase" },
      { id: "restapi", svg: "REST API" },
      { id: "NodeJs", svg: "Node.js" },
    ],
    techStack: ["MERN", "REST API", "Firebase", "SCSS"],
  },
  {
    id: 3,
    title: "Shubham Enterprises",
    description: "Simplifying loan services with a user-centered web platform.",
    image: "/SE.png",
    githubLink: "https://github.com/SheshNalwar/Shubham-Enterprises",
    liveLink: "https://shubhamenterprises.onrender.com/",
    svg: [
      { id: "React", svg: "React.js" },
      { id: "css", svg: "CSS" },
    ],
    techStack: ["React.js", "CSS"],
  },
  {
    id: 4,
    title: "ASG Academy",
    description:
      "ASG Academy boosts kids' skills through interactive learning.",
    image: "/ASG.png",
    githubLink: "https://github.com/SheshNalwar/ASG-Academy",
    liveLink: "https://asg-academy.onrender.com/",
    svg: [
      { id: "React", svg: "React.js" },
      { id: "css", svg: "CSS" },
      { id: "sanity", svg: "Sanity Studio" },
    ],
    techStack: ["React.js", "CSS", "Sanity Studio"],
  },
  {
    id: 5,
    title: "Role Master",
    description:
      "A powerful admin panel for efficient role-based access control.",
    image: "/RoleMaster.png",
    githubLink: "https://github.com/Algoture/RoleMaster",
    liveLink: "",
    svg: [
      { id: "nextjs", svg: "Next.js" },
      { id: "restapi", svg: "REST API" },
    ],
    techStack: ["Next.js", "json-server", "REST API"],
  },
  {
    id: 6,
    title: "Beat Blend",
    description: "A sleek, intuitive music player for the modern listener.",
    image: "/Beat Blend.png",
    githubLink: "https://github.com/Algoture/Beat-Blend",
    liveLink: "https://algoture.github.io/Beat-Blend/",
    svg: [
      { id: "React", svg: "React" },
      { id: "css", svg: "CSS" },
      { id: "javascript", svg: "JavaScript" },
    ],
    techStack: ["HTML5", "CSS3", "JavaScript"],
  },
];

export const skills = [
  {
    id: 1,
    skill: "TypeScript",
  },
  {
    id: 2,
    skill: "React JS",
  },
  {
    id: 3,
    skill: "Next JS",
  },
  {
    id: 4,
    skill: "Express JS",
  },
  {
    id: 5,
    skill: "MongoDB",
  },
  {
    id: 6,
    skill: "MySQL",
  },
  {
    id: 7,
    skill: "JavaScript",
  },
  {
    id: 8,
    skill: "Node JS",
  },
  {
    id: 9,
    skill: "AWS",
  },
];

export const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };

export const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0px)", transform: "translateY(0%)", opacity: 1 },
};
