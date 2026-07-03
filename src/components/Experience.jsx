import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Experience() {
  if (!profile.experience?.length) return null; // section hides itself if no experience yet

  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <Reveal>
        <h2 className="font-display text-3xl font-700 mb-2">Experience</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-10" />
      </Reveal>

      <div className="space-y-6">
        {profile.experience.map((exp, i) => (
          <Reveal key={exp.role} delay={i * 0.1} className="border-l-2 border-accent2/30 pl-6">
            <h3 className="font-display font-600 text-lg">{exp.role}</h3>
            <p className="text-accent2 font-medium">{exp.company}</p>
            <p className="text-muted text-sm mb-2">{exp.period}</p>
            <p className="text-muted">{exp.details}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
