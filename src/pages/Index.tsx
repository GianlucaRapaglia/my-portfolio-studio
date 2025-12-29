import { Helmet } from "react-helmet-async";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Gianluca Rapaglia | Applied AI Engineer</title>
        <meta
          name="description"
          content="Applied AI Engineer specializing in Machine Learning, Robotics, and Control Systems. Building practical AI solutions for real-world challenges in industry, energy systems, and mobility."
        />
        <meta
          name="keywords"
          content="AI Engineer, Machine Learning, Robotics, Python, PyTorch, Control Systems, MPC, MLOps"
        />
        <meta property="og:title" content="Gianluca Rapaglia | Applied AI Engineer" />
        <meta
          property="og:description"
          content="Building practical AI solutions for real-world challenges in industry, energy systems, automation, and mobility."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://gianluca-rapaglia.com" />
      </Helmet>
      
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
