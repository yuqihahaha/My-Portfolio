import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import { PROJECTS } from "../data/portfolioData";

export default function ProjectsSection() {
  return (
    <Section id="projects" eyebrow="Featured Destinations" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
