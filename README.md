# Rifah Jahan Tamanna — Portfolio

A fully responsive personal portfolio built with React, Vite, and Tailwind CSS. Includes dark/light mode, scroll animations, and dedicated detail pages for each project.

**Live site:** _add your deployed link here_

---

## Features

- 📱 Fully responsive navbar with smooth-scroll section links
- 🖼️ Hero section with photo, designation, and a working resume download button
- 🔗 Social links (GitHub, LinkedIn, Twitter, Facebook)
- 📝 About Me, categorized Skills, Education, and Experience sections
- 💼 Project cards with dedicated detail pages (tech stack, description, live link, GitHub link, challenges, future improvements)
- 📬 Contact section with email, phone, and WhatsApp
- 🌗 Dark / light mode toggle (persisted across visits)
- ✨ Scroll-triggered animations via Framer Motion
- 🎨 Warm terracotta & gold color palette

---

## Tech Stack

| Category | Tech |
|---|---|
| Framework | React 19 + Vite |
| Styling | Tailwind CSS (class-based dark mode) |
| Routing | React Router DOM |
| Icons | React Icons |
| Animation | Framer Motion |

---

## Project Structure

```
portfolio/
├── public/
│   ├── photo.jpg          # profile photo
│   └── resume.pdf         # downloadable resume
├── src/
│   ├── main.jsx           # app entry point, wraps App in ThemeProvider
│   ├── App.jsx             # router setup
│   ├── index.css           # Tailwind directives, theme CSS variables, fonts
│   ├── context/
│   │   └── ThemeContext.jsx   # dark/light mode state + localStorage persistence
│   ├── data/
│   │   ├── profile.js     # ✏️ your info: bio, skills, education, contact, socials
│   │   └── projects.js    # ✏️ your projects
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── ThemeToggle.jsx
│   │   └── Reveal.jsx      # reusable scroll-fade-in wrapper
│   └── pages/
│       ├── Home.jsx
│       └── ProjectDetails.jsx
```

---

## Getting Started

```bash
# install dependencies
npm install

# start local dev server
npm run dev

# build for production
npm run build

# preview the production build locally
npm run preview
```

---

## Customization

Almost everything you'd want to personalize lives in two files:

- **`src/data/profile.js`** — name, designation, bio, skills, education, experience, email, phone, WhatsApp, social links
- **`src/data/projects.js`** — add/remove/edit projects; each entry auto-generates a `/project/:id` detail page

To change your photo or resume, replace `public/photo.jpg` and `public/resume.pdf` (keep the same filenames, or update the paths in `profile.js`).

Color palette and dark/light theme values are defined in `tailwind.config.js` and `src/index.css`.

---

## Deployment

This project deploys cleanly to **Vercel** or **Netlify**:

1. Push this repo to GitHub.
2. Import it on [vercel.com](https://vercel.com) (or Netlify) — Vite is auto-detected.
3. Deploy. Done.

---

## Contact

- Email: rifah1119@gmail.com

