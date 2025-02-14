import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Highlight from "./components/Highlight";
import ParticlesHero from "./components/animation/ParticlesHero";
import Social from "./components/Social";

const Home = () => {
  return (
    <>
      <Header />
      <main className="w-screen">
        {/* Title Section */}
        <div>
          <ParticlesHero />
        </div>
        <div className="items-center justify-center text-white bg-[radial-gradient(circle_at_30%_30%,#222233,#0a0a12)] overflow-hidden z-20">
          <About />
          <Experience id="exp" />
          <Highlight />
          <Social />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
};

export default Home;