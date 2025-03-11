import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Nav from "./Components/Nav";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Umesh Nagare | Full Stack Developer & Web Portfolio",
  description:
    "Explore Umesh Nagare’s portfolio, featuring cutting-edge full-stack web development projects built with modern technologies",
  keywords: [
    "Umesh Nagare",
    "Full Stack Developer",
    "Web Developer Portfolio",
    "Next.js Developer",
    "React.js Developer",
    "MERN Stack Developer",
    "Node.js Developer",
    "Frontend Engineer",
    "Software Engineer Portfolio",
  ],
  creator: "Umesh Nagare",
  openGraph: {
    title: "Umesh Nagare | Full Stack Developer",
    description:
      "Showcasing cutting-edge full-stack web development projects using modern web technologies.",
    url: "https://umeshnagare.com",
    type: "website",
    image: "https://umeshnagare.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://x.com/umeshn22",
    title: "Umesh Nagare | Full Stack Developer",
    description:
      "Showcasing cutting-edge full-stack web development projects using Next.js, React, and Node.js.",
    image: "https://x.com/Umeshn22/photo",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
