import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import Nav from "./Components/Nav";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
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
      <body className={inter.className}>
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
