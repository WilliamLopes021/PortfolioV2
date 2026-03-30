import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";
import Contact from "./sections/Contact";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
export default App;
