import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Umesh Nagare | Full Stack Engineer",
  description:
    "Explore Umesh Nagare’s portfolio, featuring cutting-edge full-stack web development projects built with modern technologies",
  keywords: [
    "Umesh Nagare",
    "Algoture",
    "Full Stack Engineer",
    "Software Engineer Portfolio",
    "Web Engineer Portfolio",
    "Next.js Engineer",
    "React.js Engineer",
    "Node.js Engineer",
    "Frontend Engineer",
  ],
  creator: "Umesh Nagare",
  openGraph: {
    title: "Umesh Nagare | Full Stack Engineer",
    description:
      "Showcasing cutting-edge full-stack web development projects using modern web technologies.",
    url: "https://umeshnagare.com",
    type: "website",
    image: "https://umeshnagare.com/",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/umeshn22",
    title: "Umesh Nagare | Full Stack Engineer",
    description:
      "Showcasing cutting-edge full-stack web development projects using Next.js, React, and Node.js.",
    image: "https://x.com/Umeshn22/photo",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} min-h-screen bg-white text-black dark:bg-[#050505] dark:text-white`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
