import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import EducationSection from "@/components/sections/EducationSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SideProjectsSection from "@/components/sections/SideProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="noise-overlay relative min-h-screen">
      {/* Wabi-sabi corner vignette */}
      <div className="wabi-vignette" aria-hidden="true" />

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <ProjectsSection />
        <SideProjectsSection />

        {/* Skills + Experience side-by-side on larger screens */}
        <section id="skills" className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <SkillsSection />
            <ExperienceSection />
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
