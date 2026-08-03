import { motion } from "framer-motion";
import { Luggage } from "lucide-react";
import AirportDisplay from "../components/AirportDisplay";
import { GREETING } from "../data/portfolioData";

export default function HeroSection() {
  return (
    <section id="intro" className="relative flex min-h-[720px] items-center px-6 py-28 md:px-16 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-sky-200/50 blur-3xl" />
        <div className="absolute bottom-10 left-20 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl" />
      </div>
      <div className="relative mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2">
        <motion.div
          className="text-left"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-bold text-sky-700 shadow">
            <Luggage size={18} /> Boarding now for my coding journey
          </div>
          <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-slate-950 md:text-6xl">
            Hi, I'm Yuqi Zhu
          </h1>
          <p className="mb-10 max-w-2xl text-2xl leading-[1.7] text-slate-600">
            {GREETING}
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-sky-600 px-8 py-4 text-center text-lg font-bold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-700"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-slate-300 bg-white px-8 py-4 text-center text-lg font-bold text-slate-700 shadow-lg transition hover:-translate-y-1 hover:border-sky-400"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
        <motion.div
          className="w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <AirportDisplay />
        </motion.div>
      </div>
    </section>
  );
}
