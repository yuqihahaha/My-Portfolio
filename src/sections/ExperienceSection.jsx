import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Section from "../components/Section";
import { EXPERIENCES } from "../data/portfolioData";

export default function ExperienceSection() {
  return (
    <Section
      id="experience"
      eyebrow="Travel History"
      title="Experience Timeline"
      className="bg-sky-50/70"
    >
      <div className="relative space-y-6 border-l-4 border-dashed border-sky-300 pl-8">
        {EXPERIENCES.map((experience) => (
          <motion.div
            key={experience.role}
            whileHover={{ x: 8 }}
            className="relative rounded-[2rem] bg-white p-6 shadow-lg"
          >
            <div className="absolute -left-[50px] top-8 flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg">
              <Briefcase size={18} />
            </div>
            <p className="mb-2 font-mono text-sm font-bold text-sky-600">
              {experience.date}
            </p>
            <h3 className="text-2xl font-black text-slate-900">{experience.role}</h3>
            <p className="mb-4 font-semibold text-slate-500">{experience.company}</p>
            <p className="leading-7 text-slate-600">{experience.details}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
