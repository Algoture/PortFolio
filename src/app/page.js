import { Box } from "./Components/Box";
import Footer from "./Components/Footer";
import Intro from "./Components/Intro";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Writing from "./Components/Writing";

export default function Home() {
  return (
    <>
      <Box/>
      <Intro />
      <Projects />
      <Writing />
      <Skills />
      <Footer />
    </>
  );
}
