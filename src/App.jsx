import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import ScrollProgress from "./components/ScrollProgress";
import BackgroundAtmosphere from "./components/BackgroundAtmosphere";
import ScrollToTop from "./components/ScrollToTop";
import { ToastProvider } from "./components/Toast";

export default function App() {
  return (
    <ToastProvider>
      <div className="bg-base min-h-screen text-ink selection:bg-signal selection:text-base relative selection:font-semibold">
        <BackgroundAtmosphere />
        <CursorGlow />
        <ScrollProgress />
        <ScrollToTop />
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
        </main>
        <Footer />
      </div>
    </ToastProvider>
  );
}
