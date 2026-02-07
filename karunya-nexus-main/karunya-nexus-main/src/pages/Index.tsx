import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import Interactive3DSection from "@/components/Interactive3DSection";
import VideoShowcase from "@/components/VideoShowcase";
import ProjectsGallery from "@/components/ProjectsGallery";
import Timeline from "@/components/Timeline";
import TeamShowcase from "@/components/TeamShowcase";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <Interactive3DSection />
        <VideoShowcase />
        <ProjectsGallery />
        <Timeline />
        <TeamShowcase />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
