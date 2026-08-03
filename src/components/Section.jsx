import { motion } from "framer-motion";

export default function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-6 py-16 md:px-16 md:py-20 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-sky-600">
            {eyebrow}
          </p>
          <h2 className="mb-10 text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
            {title}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}
