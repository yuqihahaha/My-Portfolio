import { Mail } from "lucide-react";
import Section from "../components/Section";
import TravelGlobeCard from "../components/TravelGlobeCard";

export default function ContactSection() {
  return (
    <Section id="contact" eyebrow="Final Boarding Call" title="Let’s Connect">
      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl">
          <h3 className="mb-4 text-3xl font-black">Next destination?</h3>
          <p className="mb-8 leading-8 text-slate-300">
            I’m open to software engineering internships and data-focused engineering
            opportunities.
          </p>
          <div className="space-y-4">
            <a
              href="mailto:yuqizh.yqz@gmail.com"
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              <Mail /> yuqizh.yqz@gmail.com
            </a>
            <a
              href="https://github.com/yuqihahaha"
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yuqi-zhu-13a808291/"
              className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <TravelGlobeCard />
      </div>
    </Section>
  );
}
