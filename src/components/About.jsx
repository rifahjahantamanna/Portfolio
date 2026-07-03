import { profile } from "../data/profile";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section-alt py-20 px-6 scroll-mt-20">
      <Reveal className="max-w-4xl mx-auto">
        <h2 className="font-display text-3xl font-700 mb-2">About Me</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-8" />
        <p className="text-muted leading-relaxed whitespace-pre-line text-lg">
          {profile.about}
        </p>
      </Reveal>
    </section>
  );
}
