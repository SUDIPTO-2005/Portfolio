// @flow strict

import HeroSection from "@/components/features/hero/hero-section";
import AboutSection from "@/components/features/about/about-section";
import ExperienceSection from "@/components/features/experience/experience-section";
import SkillsMarquee from "@/components/features/skills/skills-marquee";
import ProjectsSection from "@/components/features/projects/projects-section";
import EducationSection from "@/components/features/education/education-section";
import AchievementsSection from "@/components/features/achievements/achievements-section";
import ContactSection from "@/components/features/contact/contact-section";

export default function Home() {
  return (
    <div suppressHydrationWarning>
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <SkillsMarquee />
      <ProjectsSection />
      <EducationSection />
      <AchievementsSection />
      <ContactSection />
    </div>
  );
}