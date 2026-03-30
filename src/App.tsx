import Navbar from "./sections/Navbar";
import Footer from "./sections/Footer";
import HeroSection from "./sections/HeroSection";
import AboutMe from "./sections/AboutMe";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
export default App;
