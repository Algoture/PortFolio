import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "./Components/Nav";

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
      <body>
        <Nav />
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
