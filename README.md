# Mutkule Ashish Santosh — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live-Demo-38E8C5?style=flat-square)](https://ashishmutkule-portfolio.vercel.app/)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

A modern, glassmorphism-style personal portfolio website built to showcase my skills, projects, and experience as a BCA graduate seeking opportunities in software development.

---

## 🖥️ Live Preview

> **[ashmk04.github.io](https://ashishmutkule-portfolio.vercel.app/)**

---

## ✨ Features

- **Glassmorphism UI** — frosted glass cards with animated gradient orbs
- **Fully Responsive** — works on mobile, tablet, and desktop
- **Smooth Animations** — scroll-reveal effects and animated skill bars
- **Single File** — no frameworks, no build tools, no dependencies
- **Fast Loading** — pure HTML/CSS/JS, no heavy libraries
- **Sections** — Hero, About, Skills, Projects, Contact

---

## 📁 Project Structure

```
portfolio/
├── index.html          # Main portfolio file (self-contained)
├── css/
│   └── style.css       # Extracted stylesheet (for reference)
├── js/
│   └── main.js         # Extracted JavaScript (for reference)
└── README.md           # You are here
```

> **Note:** `index.html` is fully self-contained with all CSS and JS inline.

---

## 🚀 Getting Started

### Option 1 — Open locally
```bash
# Clone this repo
git clone https://github.com/ashishmutkule/ashishmutkule.github.io.git

# Open in browser
open index.html
# or just double-click index.html
```

### Option 2 — Deploy on GitHub Pages (free hosting)
1. Fork or clone this repository
2. Go to **Settings → Pages**
3. Set source to `main` branch, `/ (root)`
4. Your site will be live at `https://<your-username>.github.io`

### Option 3 — Deploy on Netlify (drag & drop)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop the `index.html` file
3. Your site is live instantly with a public URL

---

## 🛠️ Customization Guide

### Update your personal info
Open `index.html` and search for these values to replace:

| What to change | Search for |
|---|---|
| Your name | `Mutkule Ashish Santosh` |
| Your email | `ashish@email.com` |
| LinkedIn URL | `linkedin.com/in/ashishmutkule` |
| GitHub URL | `github.com/ashishmutkule` |
| Resume link | `href="#"` near the Resume button |
| Location | `Bhiwandi, Maharashtra` |

### Add a new project
Find the `<!-- PROJECTS -->` section and copy one `project-card` block:
```html
<div class="project-card">
  <div class="project-num">PROJECT 04</div>
  <div class="project-title">Your Project Title</div>
  <p class="project-desc">Your project description here.</p>
  <div class="project-stack">
    <span class="stack-badge">React</span>
    <span class="stack-badge">Node.js</span>
  </div>
</div>
```

### Add a new skill
Find the `<!-- SKILLS -->` section and copy one `skill-card` block:
```html
<div class="skill-card">
  <div class="skill-icon" style="background:rgba(56,232,197,0.18);">⚛️</div>
  <div class="skill-name">React</div>
  <div style="font-size:0.8rem;color:var(--muted);">Building component-based UIs</div>
  <div class="skill-tags">
    <span class="tag">React</span><span class="tag">JSX</span><span class="tag">Hooks</span>
  </div>
  <div class="skill-bar-bg">
    <div class="skill-bar" style="width:65%;background:linear-gradient(90deg,#7C6FFF,#38E8C5);"></div>
  </div>
</div>
```

### Change accent colors
Edit the CSS variables at the top of the `<style>` block:
```css
:root {
  --accent1: #7C6FFF;  /* purple — change to your color */
  --accent2: #38E8C5;  /* teal */
  --accent3: #FF7AAF;  /* pink */
}
```

---

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Structure & semantics |
| CSS3 | Styling, animations, glassmorphism |
| Vanilla JavaScript | Scroll-reveal, skill bar animations |
| Google Fonts (Syne + DM Sans) | Typography |
| IntersectionObserver API | Scroll-triggered animations |

No frameworks. No npm. No build step. Just open and go.

---

## 📸 Sections Overview

| Section | Description |
|---|---|
| **Hero** | Name, tagline, CTA buttons |
| **About** | Bio, location, key stats |
| **Skills** | Tech stack with proficiency bars |
| **Projects** | Project cards with tech badges |
| **Contact** | Email, LinkedIn, GitHub, Resume links |

---

## 📬 Contact

**Mutkule Ashish Santosh**
- 📧 Email: [mutkuleashish1@email.com](mutkuleashish1@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/ashish-mutkule](https://linkedin.com/in/ashish-mutkule)
- 🐙 GitHub: [github.com/Ashmk04](https://github.com/Ashmk04)
- 📍 Sangamner, Maharashtra, India

---

## License

This portfolio's source code is licensed under the MIT License.

Copyright © 2026 Ashish Mutkule. All rights reserved.

The following are NOT covered by the MIT License and may not be copied, redistributed, or used without explicit permission:

* Personal photographs
* Logos and branding
* Resume/CV content
* Project descriptions and case studies
* Blog posts and written content
* Personal information and contact details
* Any other original creative content contained in this portfolio

Only the source code is provided under the MIT License.


---

<p align="center">Designed & built by Mutkule Ashish · 2026</p>
