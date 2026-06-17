import React, { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Globe from "react-globe.gl";
import {
  Plane,
  Luggage,
  Briefcase,
  GraduationCap,
  Mail,
  ExternalLink,
  Compass,
  Ticket,
  Code2,
  Database,
  BarChart3,
} from "lucide-react";

const NAV_ITEMS = [
  { id: "intro", label: "Check-in" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experiences" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

const PROJECTS = [
  {
    title: "InsightUBC",
    type: "Full-Stack Analytics Platform",
    stamp: "QUERY → VISUALIZE",
    description:
      "A dataset analytics web app for uploading, querying, and visualizing course datasets through RESTful APIs.",
    tech: ["React", "TypeScript", "Node.js", "Express", "Mocha", "Chai"],
    icon: BarChart3,
    showButton: false,
  },
  {
    title: "Pet Management System",
    type: "Database Web Application",
    stamp: "SQL → CRUD",
    description:
      "A web application for managing pet shelter records with custom APIs and a normalized Oracle database schema.",
    tech: ["React", "JavaScript", "Oracle DB", "SQL", "REST APIs"],
    icon: Database,
    links: { github: "https://github.com/yuqihahaha/Pet-Shelter-Management" },
    showButton: true,
  },
  {
    title: "Wildfire Bucketing Analysis",
    type: "Statistical Modeling Project",
    stamp: "EDA → GLM",
    description:
      "A logistic regression project studying factors associated with aerial bucketing usage in wildfire response data.",
    tech: ["R", "tidyverse", "AUC", "variable selection", "Logistic Regression"],
    icon: Compass,
    links: { github: "https://github.com/yuqihahaha/Wildfire-Bucketing-Analysis" },
    showButton: true,
  },
  {
  title: "SAP Customer Churn Datathon",
  type: "Machine Learning Case Study",
  location: "UBC",
  stamp: "ML → INSIGHTS",
  description:
    "Used machine learning models to predict customer churn and proposed business strategies to reduce churn risk.",
  tech: ["R", "KNN", "SVM", "Random Forest", "Prediction"],
  icon: BarChart3,
  links: { github: `${import.meta.env.BASE_URL}SAPDatathon.html` },
  showButton: true,
},
{
  title: "BYTE Clothing Store Datathon",
  type: "Business Data Analysis",
  location: "UBC",
  stamp: "EDA → STRATEGY",
  description:
    "Analyzed clothing sales data and developed business recommendations to improve profit and reduce operational risks.",
  tech: ["Python", "Pandas", "Matplotlib", "Excel", "EDA"],
  icon: Compass,
  links: { github: "#" },
  showButton: false,
},
{
  title: "BFS Treasure Hunt",
  type: "Algorithms & Data Structures",
  stamp: "MAP → TREASURE",
  description:
    "Built custom Stack, Queue, and Deque data structures in C++ and used Breadth-First Search to navigate encoded treasure maps and discover optimal routes.",
  tech: ["C++", "BFS", "Graphs", "Stack", "Queue", "Deque"],
  icon: Compass,
  links: { github: "#" },
  showButton: false,
},
];

const EXPERIENCES = [
  {
    role: "Software Development Engineer (Co-op)",
    company: "Optum — Workflow Intelligence",
    date: "May 2025 – Aug 2025",
    details:
      "Improved security posture, contributed C#/.NET, JavaScript, and SQL features, and supported build/deployment workflows.",
  },
  {
    role: "Software Development and QC Engineer (Co-op)",
    company: "Optum — Speed Sync",
    date: "Sep 2024 – Apr 2025",
    details:
      "Worked on logging migration, PowerShell automation, GCP monitoring support, and technical documentation.",
  },
];

const SKILLS = [
  "C/C++",
  "C#",
  "TypeScript",
  "JavaScript",
  "Java",
  "Python",
  "R",
  "SQL",
  "React",
  "Node.js",
  "Express",
  ".NET",
  "Oracle DB",
  "MSSQL",
  "Git",
  "Mocha/Chai",
];

function SkillsMarquee() {
  const repeatedSkills = [...SKILLS, ...SKILLS];

  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-xl">
      <div className="mb-5 flex items-center gap-3 text-white">
        <Code2 className="text-sky-300" />
        <h3 className="text-2xl font-black">My Developer Travel Kit</h3>
      </div>

      <div className="relative mx-auto h-24 w-[70%] overflow-hidden rounded-[28px] border-[6px] border-slate-300 bg-slate-900 shadow-[0_0_25px_rgba(56,189,248,0.35)]">
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
          {SKILLS.map((skill) => (
            <span
              key={skill}
              className="whitespace-nowrap rounded-2xl border border-sky-400/40 bg-sky-400/10 px-5 py-3 font-mono text-sm font-bold uppercase tracking-wider text-sky-100"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>

      <p className="mt-5 text-sm leading-6 text-slate-400">
        A rotating baggage belt of languages, frameworks, databases, and testing tools.
      </p>
    </div>
  );
}

function Section({ id, eyebrow, title, children, className = "" }) {
  return (
    <section id={id} className={`relative px-6 py-24 md:px-16 ${className}`}>
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

function AirportDisplay() {
  const rows = [
    ["School", "UBC"],
    ["Major", "CS + Stats"],
    ["Year", "4th"],
  ];

  return (
    <div className="mx-auto w-[420px] overflow-hidden rounded-3xl border border-slate-700 bg-slate-950 shadow-2xl">
      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-900 px-5 py-3">
        <div className="flex items-center gap-2 text-sky-300">
          <Ticket size={18} />
          <span className="font-mono text-sm uppercase tracking-widest">Information</span>
        </div>
        <span className="rounded-full bg-emerald-400/15 px-3 py-1 font-mono text-xs text-emerald-300">
          ON TIME
        </span>
      </div>
      <div className="grid gap-px bg-slate-700 font-mono">
        {rows.map(([key, value]) => (
          <div key={key} className="grid grid-cols-3 bg-slate-950">
            <div className="px-4 py-4 text-xs uppercase tracking-widest text-slate-500 md:text-sm">
              {key}
            </div>
            <div className="col-span-2 px-4 py-4 text-lg font-bold text-amber-300 md:text-2xl">
              {value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <motion.article
      whileHover={{ y: -8, rotate: -1 }}
      className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg"
    >
      <div className="absolute right-5 top-5 rounded-full border-2 border-dashed border-sky-300 px-3 py-2 font-mono text-xs font-bold text-sky-700">
        {project.stamp}
      </div>
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-100 text-sky-700">
        <Icon size={28} />
      </div>
      <h3 className="text-2xl font-black text-slate-900">{project.title}</h3>
      <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-sky-600">
        {project.type}
      </p>
      <p className="mb-6 leading-7 text-slate-600">{project.description}</p>
      <div className="mb-6 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <span key={item} className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
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

function PlanePath() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [40, 900]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [90, 115, 90]);

  return (
    <div className="pointer-events-none fixed left-4 top-0 z-40 hidden h-screen w-16 md:block">
      <div className="absolute left-8 top-0 h-full border-l-2 border-dashed border-sky-300/70" />
      <motion.div style={{ y, rotate }} className="absolute left-2 text-sky-600 drop-shadow-lg">
        <Plane size={38} fill="currentColor" />
      </motion.div>
    </div>
  );
}

function TravelGlobeCard() {
  const places = [
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
  { name: "United States", lat: 39.8283, lng: -98.5795 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  { name: "Japan", lat: 36.2048, lng: 138.2529 },
  { name: "Denmark", lat: 56.2639, lng: 9.5018 },
  { name: "Netherlands", lat: 52.1326, lng: 5.2913 },
  { name: "Sweden", lat: 60.1282, lng: 18.6435 },
];

  return (
    <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-lg">
      <h3 className="mb-6 text-3xl font-black text-slate-900">
        🌍 Places I’ve Been
      </h3>

      <div className="flex h-[420px] items-center justify-center overflow-hidden rounded-[2rem] bg-slate-950">
        <Globe
          width={500}
          height={500}
          backgroundColor="rgba(0,0,0,0)"
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
          pointsData={places}
          pointLat="lat"
          pointLng="lng"
          pointColor={() => "#38bdf8"}
          pointAltitude={0.04}
          pointRadius={0.5}
          labelsData={places}
          labelLat="lat"
          labelLng="lng"
          labelText="name"
          labelSize={2.0}
          labelDotRadius={0.4}
          labelColor={() => "#ffffff"}
        />
      </div>
    </div>
  );
}

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

  const greeting = useMemo(() => "a developer who enjoys building useful software and discovering new places around the world.", []);

  return (
    <main className="overflow-x-hidden bg-gradient-to-b from-sky-50 via-white to-orange-50 text-slate-800">
      <PlanePath />

      <nav className="fixed left-1/2 top-4 z-50 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/80 px-3 py-2 shadow-lg backdrop-blur md:block">
        <div className="flex gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                active === item.id ? "bg-sky-600 text-white" : "text-slate-600 hover:bg-sky-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="intro" className="relative flex min-h-[760px] items-start px-6 pt-36 md:px-16">
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
            <p className="mb-10 max-w-2xl text-2xl leading-[1.7] text-slate-600">{greeting}</p>
          </motion.div>
          <motion.div
            className="scale-75 origin-right"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <AirportDisplay />
          </motion.div>
        </div>
        <div className="absolute bottom-20 left-1/2 flex -translate-x-1/2 gap-6">
          <a
            href="#projects"
            className="rounded-full bg-sky-600 px-10 py-5 text-xl font-bold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-1 hover:bg-sky-700"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-full border-2 border-slate-300 bg-white px-10 py-5 text-xl font-bold text-slate-700 shadow-lg transition hover:-translate-y-1 hover:border-sky-400"
          >
            Contact Me
          </a>
        </div>
      </section>

      <Section id="about" eyebrow="Passport Control" title="About Me">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
          <div className="max-w-[700px] rounded-[2rem] bg-white p-8 shadow-lg">
            <p className="text-xl leading-9 text-slate-700">
              I’m computer sicence + statictics student at UBC who loves full-stack engineering, data-driven applications and exploring new places. I enjoy turning messy requirements into practical products — the same way a good itinerary turns many places into one memorable trip.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative">
              <img
                src={`${import.meta.env.BASE_URL}your-photo.jpeg`}
                alt="Yuqi Zhu"
                className="h-[350px] w-[350px] rounded-full object-cover border-8 border-white shadow-2xl"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section id="projects" eyebrow="Featured Destinations" title="Projects">
        <div className="grid gap-6 md:grid-cols-3">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section id="experience" eyebrow="Travel History" title="Experience Timeline">
        <div className="relative space-y-6 border-l-4 border-dashed border-sky-300 pl-8">
          {EXPERIENCES.map((exp) => (
            <motion.div
              key={exp.role}
              whileHover={{ x: 8 }}
              className="relative rounded-[2rem] bg-white p-6 shadow-lg"
            >
              <div className="absolute -left-[50px] top-8 flex h-9 w-9 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg">
                <Briefcase size={18} />
              </div>
              <p className="mb-2 font-mono text-sm font-bold text-sky-600">{exp.date}</p>
              <h3 className="text-2xl font-black text-slate-900">{exp.role}</h3>
              <p className="mb-4 font-semibold text-slate-500">{exp.company}</p>
              <p className="leading-7 text-slate-600">{exp.details}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section id="skills" eyebrow="Carry-on Essentials" title="Skills">
        <SkillsMarquee />
      </Section>

      <Section id="contact" eyebrow="Final Boarding Call" title="Let’s Connect">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
            <h3 className="mb-4 text-3xl font-black">Next destination?</h3>
            <p className="mb-8 leading-8 text-slate-300">
              I’m open to software engineering internships and data-focused engineering opportunities.
            </p>
            <div className="space-y-4">
              <a href="mailto:yuqizh.yqz@gmail.com" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15">
                <Mail /> yuqizh.yqz@gmail.com
              </a>
              <a href="https://github.com/yuqihahaha" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15">
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/yuqi-zhu-13a808291/" className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15">
                LinkedIn
              </a>
            </div>
          </div>
          <TravelGlobeCard />
        </div>
      </Section>
    </main>
  );
}
