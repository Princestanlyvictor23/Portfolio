import Navbar from "./components/navigation/Navbar";
import HeroSection from "./sections/Hero/HeroSection";
import AboutSection from "./sections/About/AboutSection";
import ProjectsSection from "./sections/Projects/ProjectsSection";
import ExperienceSection from "./sections/Experience/ExperienceSection";
import SkillsSection from "./sections/Skills/SkillsSection";
import ContactSection from "./sections/Contact/ContactSection";

function App() {
  return (
    <div className="min-h-screen bg-[#f9f7f1] antialiased selection:bg-gray-300 selection:text-black">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
