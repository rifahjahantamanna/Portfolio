import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // If we're on a project detail page, clicking a section link should
  // first go home, then scroll to that section.
  const handleLinkClick = (href) => (e) => {
    setOpen(false);
    if (location.pathname !== "/") {
      e.preventDefault();
      navigate("/");
      setTimeout(() => {
        document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-paper/90 backdrop-blur border-b border-ink/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-xl font-700 text-ink">
          RIFAH<span className="text-accent">.ISFJ</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8 font-medium text-sm">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile toggle */}
          <button
            className="md:hidden text-2xl text-ink"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-1 px-6 pb-4 bg-paper border-t border-ink/10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={handleLinkClick(link.href)}
                className="block py-2 text-muted hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
