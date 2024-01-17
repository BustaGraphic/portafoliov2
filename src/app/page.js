import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import SkillsSection from "./components/SkillsSection"



export default function Home() {
  

  return (
    <main className="" >
      
      <div className=" bg-fondocolor fuente dark:bg-[#000000] ">
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
      </div>
    </main>
  );
}
