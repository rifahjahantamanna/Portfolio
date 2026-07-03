import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className="bg-surface rounded-xl overflow-hidden border border-ink/10 shadow-sm hover:shadow-lg transition-shadow flex flex-col"
    >
      <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-600 text-lg mb-2">{project.name}</h3>
        <p className="text-muted text-sm mb-4 flex-1">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.slice(0, 3).map((t) => (
            <span key={t} className="text-xs bg-ink/5 text-muted px-2 py-1 rounded">
              {t}
            </span>
          ))}
        </div>
        <Link
          to={`/project/${project.id}`}
          className="inline-block text-center bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors"
        >
          View More / Details
        </Link>
      </div>
    </motion.div>
  );
}
