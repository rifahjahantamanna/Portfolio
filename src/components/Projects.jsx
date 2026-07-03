import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-alt py-20 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="font-display text-3xl font-700 mb-2">Projects</h2>
          <div className="w-16 h-1 bg-accent rounded-full mb-10" />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
