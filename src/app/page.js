import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "./components/SkillsSection"


export default function Home() {
  const backgroundStyle = {
    background: '#CADAEA',
    minHeight: '100vh',  
  };

  return (
    <main style={backgroundStyle}>
      <Navbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />

        <EmailSection />
      </div>
      {/* <Footer /> */}
    </main>
  );
}
