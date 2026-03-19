import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import LoadingScreen from "./components/LoadingScreen";
import Chatbot from "./components/Chatbot";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Resume />
          <Contact />
        </main>

        <ScrollToTop />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;
