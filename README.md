# Zhiqi Kang — Personal Website & Portfolio

A modern, fast, and minimal personal website built with [Astro 5](https://astro.build), [Tailwind CSS](https://tailwindcss.com), and [MDX](https://mdxjs.com/).

## 🚀 Getting Started

### Local Development

```bash
# Install dependencies (Node.js LTS)
npm install

# Start local development server
npm run dev
```

Open `http://localhost:4321` in your browser.

### Build & Preview

```bash
# Build static site for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

## 📁 Project Structure

```
├── .github/workflows/deploy.yml   # GitHub Pages automated deployment
├── src/
│   ├── components/                # Reusable Astro UI components (ThemeToggle, ProjectCard, Header, Footer)
│   ├── content/                   # MDX Content Collections
│   │   ├── projects/              # Project case studies & showcase metadata
│   │   └── writing/               # Articles, notes, and essays
│   ├── layouts/                   # BaseLayout, ProjectLayout, PostLayout
│   ├── pages/                     # File-based routes (index, projects, writing, cv, 404)
│   └── styles/                    # Global Tailwind CSS and theme tokens
├── public/                        # Static assets (favicons, images)
├── astro.config.mjs               # Astro configuration
└── tailwind.config.mjs            # Tailwind CSS configuration
```

## 🚢 Deployment

The site is automatically built and deployed to GitHub Pages (`https://zhiqikang.github.io`) on every push to `master` via GitHub Actions (`.github/workflows/deploy.yml`).