# Portfolio — React + Tailwind (Dark)

This is a starter personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. It includes placeholder projects, internships, and certificates which you can replace with your real data.

Features
- Dark theme with glowing accent color
- Framer Motion section animations
- Particles background (tsparticles)
- Data-driven sections (projects, internships, certificates) using JSON files
- Lazy-loading thumbnails and demo iframes
- Contact form placeholder using EmailJS (replace keys)

Quick start (Windows PowerShell)

1. Install dependencies

```powershell
cd c:\Projects\Portfolio
npm install
```

2. Run dev server

```powershell
npm run dev
```

Open http://localhost:5173 in your browser.

Replace placeholders in `src/data/*.json` with your real content.

Notes
- EmailJS integration in `src/components/Contact.jsx` uses placeholder IDs. Replace with your service/template/user IDs.
- To toggle light/dark, the navbar adds/removes the `dark` class on the html element (simple toggle). You can wire a persistent preference later.

Next steps
- Replace placeholder images with your own assets
- Configure real EmailJS IDs or backend endpoint
- Add tests and CI, and deploy (Vercel/Netlify)

Enjoy! — portfolio scaffold generated for Aryan Adhav
