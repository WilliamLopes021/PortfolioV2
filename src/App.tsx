import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
