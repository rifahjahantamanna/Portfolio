import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <Reveal>
        <h2 className="font-display text-3xl font-700 mb-2">Education</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-10" />
      </Reveal>

      <div className="space-y-6">
        {profile.education.map((edu, i) => (
          <Reveal key={edu.degree} delay={i * 0.1} className="border-l-2 border-accent/30 pl-6">
            <h3 className="font-display font-600 text-lg">{edu.degree}</h3>
            <p className="text-accent font-medium">{edu.institution}</p>
            <p className="text-muted text-sm mb-2">{edu.year}</p>
            <p className="text-muted">{edu.details}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
