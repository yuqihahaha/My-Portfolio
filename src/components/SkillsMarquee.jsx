import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import { SKILLS } from "../data/portfolioData";

export default function SkillsMarquee() {
  const repeatedSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-xl">
      <div className="mb-5 flex items-center gap-3 text-white">
        <Code2 className="text-sky-300" />
        <h3 className="text-2xl font-black">My Developer Travel Kit</h3>
      </div>

      <div className="relative h-24 w-full overflow-hidden rounded-[28px] border-[6px] border-slate-300 bg-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
        <motion.div
          className="absolute left-0 top-[25%] flex w-max -translate-y-1/2 gap-4 px-4"
          initial={{ x: "-20%" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 22,
            ease: "linear",
          }}
        >
          {repeatedSkills.map((skill, index) => (
            <span
              key={`${skill}-${index}`}
              className="whitespace-nowrap rounded-2xl border border-sky-400/40 bg-sky-400/10 px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-sky-100"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

    </div>
  );
}
