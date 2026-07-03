import { profile } from "../data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8 px-6 text-center text-sm text-muted">
      © {new Date().getFullYear()} {profile.name}. Built with React & Tailwind CSS.
    </footer>
  );
}
