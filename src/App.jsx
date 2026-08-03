import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import PlanePath from "./components/PlanePath";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import { NAV_ITEMS } from "./data/portfolioData";

export default function TravelPortfolio() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const observers = NAV_ITEMS.map((item) => {
      const el = document.getElementById(item.id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(item.id);
        },
        { threshold: 0.45 }
      );

      observer.observe(el);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-orange-50 text-left text-slate-800">
      <PlanePath />
      <Navigation active={active} />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
