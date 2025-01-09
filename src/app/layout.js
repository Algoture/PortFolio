import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "./Components/Nav";

const gilroy = localFont({
  src: "./fonts/SF Pro.woff",
  variable: "--font-gilroy",
  weight: "100 900",
});

export const metadata = {
  title: "Umesh Nagare Portfolio",
  description:
    "Umesh Nagare's Portfolio: Showcasing skills in web development, UI/UX, and full-stack projects.",
  keywords: [
    "Next.js",
    "Umesh",
    "Nagare",
    "Umesh Nagare Portfolio",
    "Portfolio",
    "Umesh Nagare",
    "Full Stack Developer",
  ],
  creator: "Umesh Nagare",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} `}>
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
