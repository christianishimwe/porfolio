import ProfileSection from "@/sections/ProfileSection";
import TechStackSection from "@/sections/TechStackSection";
import ProjectsSection from "@/sections/ProjectsSection";
import ContactSection from "@/sections/ContactSection";

export default function Home() {
  return (
    <div className="pt-24 max-w-5xl mx-auto px-4">
      <div id="profile">
        <ProfileSection />
      </div>
      <div id="techstack" className="mt-24">
        <TechStackSection />
      </div>
      <div id="projects" className="mt-24">
        <ProjectsSection />
      </div>
      <div id="contact" className="mt-24 mb-24">
        <ContactSection />
      </div>
    </div>
  );
}
