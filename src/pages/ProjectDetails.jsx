import { useParams, Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-6">
        <p className="text-xl font-display">Project not found.</p>
        <Link to="/" className="text-accent font-medium">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 max-w-4xl mx-auto">
      <Link to="/#projects" className="inline-flex items-center gap-2 text-muted hover:text-accent mb-8">
        <FaArrowLeft /> Back to projects
      </Link>

      <img src={project.image} alt={project.name} className="w-full h-72 object-cover rounded-xl mb-8" />

      <h1 className="font-display text-3xl font-700 mb-4">{project.name}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.techStack.map((t) => (
          <span key={t} className="text-sm bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <a
          href={project.liveLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          <FaExternalLinkAlt /> Live Project
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 border border-ink/20 px-5 py-2.5 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
        >
          <FaGithub /> GitHub (Client)
        </a>
      </div>

      <div className="space-y-8">
        <div>
          <h2 className="font-display font-600 text-xl mb-2">Description</h2>
          <p className="text-muted leading-relaxed">{project.description}</p>
        </div>
        <div>
          <h2 className="font-display font-600 text-xl mb-2">Challenges Faced</h2>
          <p className="text-muted leading-relaxed">{project.challenges}</p>
        </div>
        <div>
          <h2 className="font-display font-600 text-xl mb-2">Future Improvements</h2>
          <p className="text-muted leading-relaxed">{project.improvements}</p>
        </div>
      </div>
    </div>
  );
}
