import { useEffect, useState } from "react";
import CloudBackground from "./components/CloudBackground";
import Navigation from "./components/Navigation";
import PlanePath from "./components/PlanePath";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";
import ExperienceSection from "./sections/ExperienceSection";
import HeroSection from "./sections/HeroSection";
import ProjectsSection from "./sections/ProjectsSection";
import SkillsSection from "./sections/SkillsSection";
import { NAV_ITEMS } from "./data/portfolioData";
import { AMBIENT_THEMES } from "./data/ambientThemes";
import useTimePeriod from "./hooks/useTimePeriod";
import DawnMist from "./components/DawnMist";

export default function TravelPortfolio() {
  const [active, setActive] = useState("intro");
  const currentPeriod = useTimePeriod();

  const previewPeriod = new URLSearchParams(window.location.search).get("period");

  const period =
    import.meta.env.DEV && AMBIENT_THEMES[previewPeriod]
      ? previewPeriod
      : currentPeriod;

  const theme = AMBIENT_THEMES[period];

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
    <main data-period={period} className="relative isolate overflow-x-hidden text-left text-slate-800" style={{ background: theme.background }}>
      <CloudBackground theme={theme} />
      {period === "dawn" && <DawnMist />}
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
