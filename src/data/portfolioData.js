import { BarChart3, Compass, Database } from "lucide-react";

export const NAV_ITEMS = [
  { id: "intro", label: "Check-in" },
  { id: "about", label: "About Me" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experiences" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const GREETING =
  "a developer who enjoys building useful software and discovering new places around the world.";

export const PROJECTS = [
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
    tech: ["React", "JavaScript", "SQL","Oracle DB"],
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
    tech: ["R", "tidyverse", "AUC", "Variable selection", "Logistic Regression"],
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
    links: { github: "https://github.com/yuqihahaha/Power-BI-Project" },
    showButton: true,
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

export const EXPERIENCES = [
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

export const SKILLS = [
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
