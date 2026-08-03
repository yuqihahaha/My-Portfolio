import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  const Icon = project.icon;

  return (
    <motion.article
      whileHover={{ y: -8, rotate: -1 }}
      className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg"
    >
      <div className="absolute right-5 top-5 rounded-full border-2 border-dashed border-sky-300 px-3 py-2 font-mono text-xs font-bold text-sky-700">
        {project.stamp}
      </div>
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
        <Icon size={28} />
      </div>
      <h3 className="pr-20 text-2xl font-black text-slate-900">{project.title}</h3>
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-600">
        {project.type}
      </p>
      <p className="mb-6 leading-7 text-slate-600">{project.description}</p>
      <div className="mb-6 mt-auto flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700"
          >
            {item}
          </span>
        ))}
      </div>
      {project.showButton && (
        <div className="flex gap-3">
          <a
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-bold text-white"
            href={project.links.github}
          >
            View Details
          </a>
        </div>
      )}
    </motion.article>
  );
}
