import localFont from "next/font/local";
import Dock from "./Dock/Dock";
import "./globals.css";

const gilroy = localFont({
  src: "./fonts/Gilroy.woff",
  variable: "--font-gilroy",
  weight: "100 900",
});

export const metadata = {
  title: "Umesh Nagare Portfolio",
  description:
    "Umesh Nagare's Portfolio: Showcasing skills in web development, UI/UX and full-stack projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="KMChJVQuClEDsBDCmU8FrVcBNwyAe4DY4qvqEtTywc8"
      />
      <body className={`${gilroy.variable}`}>
        <Dock />
        {children}
      </body>
    </html>
  );
}
