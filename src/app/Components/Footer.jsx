import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full flex  justify-end items-center p-4">
      <p className="dark:text-white">Made with ❤️ by &nbsp;</p>
      <Link
        href="https://x.com/umeshn22"
        target="_blank"
        className="text-accent cursor-pointer">
        @Umesh
      </Link>
    </footer>
  );
};

export default Footer;
