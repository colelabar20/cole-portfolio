import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import Hero from "../sections/Hero";
import About from "../sections/About";
import Projects from "../sections/Projects";
import Research from "../sections/Research";
import Skills from "../sections/Skills";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}