import { motion } from "framer-motion";
import { profile } from "../data/profile";
import Reveal from "./Reveal";

// Add/reorder colors here — categories are assigned one automatically,
// in order, no need to match category names manually.
const palette = [
  "bg-accent/10 text-accent",
  
  
  
  "bg-amber-500/10 text-amber-600",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 max-w-4xl mx-auto scroll-mt-20">
      <Reveal>
        <h2 className="font-display text-3xl font-700 mb-2">Skills</h2>
        <div className="w-16 h-1 bg-accent rounded-full mb-10" />
      </Reveal>

      <div className="grid sm:grid-cols-3 gap-8">
        {Object.entries(profile.skills).map(([category, items], catIdx) => {
          const colorClass = palette[catIdx % palette.length];

          return (
            <Reveal key={category} delay={catIdx * 0.1}>
              <h3 className="font-display font-600 mb-4">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    whileHover={{ scale: 1.08 }}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium ${colorClass}`}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}