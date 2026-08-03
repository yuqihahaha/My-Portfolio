import Section from "../components/Section";

export default function AboutSection() {
  return (
    <Section id="about" eyebrow="Passport Control" title="About Me" className="bg-white/55">
      <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-[700px] rounded-[2rem] bg-white p-8 shadow-lg">
          <p className="text-xl leading-9 text-slate-700">
            I’m a computer science + statistics student at UBC who loves full-stack
            engineering, data-driven applications and exploring new places. I enjoy turning
            messy requirements into practical products — the same way a good itinerary
            turns many places into one memorable trip.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative">
            <img
              src={`${import.meta.env.BASE_URL}your-photo.jpeg`}
              alt="Yuqi Zhu"
              className="aspect-square w-full max-w-[320px] rounded-full border-8 border-white object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
