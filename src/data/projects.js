
export const projects = [
  {
    id: "portfolio-website",
    name: "Personal Portfolio Website",
    image: "https://placehold.co/600x400/C2542D/F7F1E8?text=Portfolio",
    shortDescription: "This very site — a fully responsive portfolio with dark mode and animations.",
    techStack: ["React", "Vite", "Tailwind CSS", "Framer Motion", "React Router"],
    description:
      "A fully responsive personal portfolio built from scratch with React and Tailwind CSS. Features a class-based dark/light mode toggle with persisted preference, scroll-triggered animations via Framer Motion, and dedicated detail pages for each project — including this one.",
    liveLink: "https://portfolio-rosy-rho-54.vercel.app",
    githubLink: "https://github.com/rifahjahantamanna/Portfolio",
    challenges:
      "Getting dark mode to apply cleanly across every component without hardcoding colors everywhere meant switching the whole palette to CSS variables early on, rather than adding dark: classes one by one.",
    improvements:
    "Migrated profile and project content to Supabase, so I can now edit everything — bio, skills, projects — directly through a database table instead of touching code or redeploying. Next up: a small authenticated admin form instead of the raw table editor, and a custom domain instead of the default Vercel subdomain."
      
  },
  {
    id: "vocabnex",
    name: "VocabNex — AI-Powered Vocabulary Builder",
    image: "https://placehold.co/600x400/C2542D/F7F1E8?text=VocabNex",
    shortDescription: "AI-powered vocabulary builder with flashcards and quiz mode.",
    techStack: ["Next.js 16", "React.js", "Tailwind CSS", "Supabase", "Gemini API", "Vercel"],
    description:
      "A full-stack AI-powered web app built from scratch with Next.js, React, Supabase, and the Gemini API. It includes a smart definition-caching layer — AI-generated definitions are stored in a shared Supabase database so repeat words load instantly with zero extra API calls. It also has animated flashcards with progress tracking and an AI-generated multiple-choice quiz mode, with scores saved per user.",
    liveLink: "https://vocab-nex.vercel.app", 
    githubLink: "https://github.com/rifahjahantamanna/VocabNex.git", 
    challenges:
      "Balancing API costs against responsiveness was the core challenge — repeatedly calling the Gemini API for the same word would be slow and expensive at scale, which is what drove the shared caching layer design.",
    improvements:
      "Planning to add spaced-repetition scheduling for flashcards and support for multiple languages beyond English definitions.",
  },
  {
    id: "devpulse",
    name: "DevPulse — Internal Issue & Feature Tracker",
    image: "https://placehold.co/600x400/C79A45/2A1F1A?text=DevPulse",
    shortDescription: "A RESTful bug/feature tracker with role-based access control.",
    techStack: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "JWT", "Railway"],
    description:
      "A RESTful backend for bug and feature-request tracking, with JWT authentication, bcrypt password hashing, and role-based access control (contributor vs. maintainer). Built with a modular Express.js + TypeScript architecture featuring centralized error handling, auth middleware, and environment-based configuration, deployed live on Railway with PostgreSQL.",
    liveLink: "https://devpulse-production-71b8.up.railway.app", 
    githubLink: "https://github.com/rifahjahantamanna/DevPulse.git", 
    challenges:
      "Designing role-based access control cleanly meant keeping authorization logic out of individual route handlers — I moved it into reusable middleware so permissions stay consistent as new routes get added.",
    improvements:
      "Next up: a lightweight frontend dashboard for the API, plus webhook notifications when issues change status.",
  }
  
];
