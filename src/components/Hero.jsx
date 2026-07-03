import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { profile } from "../data/profile";
// import CodeRainBackground from "./CodeRainBackground";
import AnimatedConnections from "./AnimatedConnections";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center pt-24 pb-16 px-6 max-w-6xl mx-auto"
    >
      {/* Decorative background blobs — purely visual, sit behind content */}
      <div className="bg-blob w-72 h-72 bg-accent -top-10 -left-10" />
      <div className="bg-blob w-72 h-72 bg-accent2 bottom-0 right-0" />
      <AnimatedConnections />

      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="text-accent font-medium mb-3">Hi, I'm {profile.name} 👋</p>
          <h1 className="font-display text-4xl sm:text-5xl font-700 leading-tight mb-4">
            {profile.designation}
          </h1>
          <p className="text-muted text-lg mb-8 max-w-md">{profile.tagline}</p>

          <div className="flex flex-wrap items-center gap-4 mb-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href={profile.resumeUrl}
              download
              className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
            >
              <HiOutlineDownload className="text-lg" />
              Download Resume
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              className="inline-flex items-center gap-2 border border-ink/20 px-6 py-3 rounded-lg font-medium hover:border-accent hover:text-accent transition-colors"
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social links */}
          <div className="flex gap-4 text-2xl text-muted">
            <motion.a whileHover={{ scale: 1.2, y: -2 }} href={profile.socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors">
              <FaGithub />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -2 }} href={profile.socials.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors">
              <FaLinkedin />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -2 }} href={profile.socials.twitter} target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-accent transition-colors">
              <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2, y: -2 }} href={profile.socials.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="hover:text-accent transition-colors">
              <FaFacebook />
            </motion.a>
          </div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="flex justify-center md:justify-end"
        >
          <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-accent/20 shadow-xl">
            <img
              src={profile.photo}
              alt={profile.name}
              className="w-full h-full object-cover"
              onError={(e) => (e.target.src = "https://placehold.co/400x400/2563EB/F7F5F2?text=Your+Photo")}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
