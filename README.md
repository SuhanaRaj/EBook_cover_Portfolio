# Suhana Raj — Book Cover Designer Portfolio

A single-page portfolio built with React + Vite, showcasing 5 sample book
cover designs as "Selected Work" / "Portfolio Projects."

## Project structure

```
suhana-portfolio/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx                 # React entry point
│   ├── App.jsx                  # Assembles all sections
│   ├── index.css                # All styles (tokens + sections)
│   ├── data/
│   │   └── projects.js          # The 5 portfolio project entries
│   ├── assets/
│   │   └── covers/               # ← your 5 uploaded book covers live here
│   │       ├── becoming-yourself.png
│   │       ├── the-summer-we-never-had.png
│   │       ├── the-house-at-midnight.png
│   │       ├── build-without-burnout.png
│   │       └── the-wealth-habit.png
│   ├── hooks/
│   │   └── useReveal.js          # Scroll-reveal animation hook
│   └── components/
│       ├── Navbar.jsx
│       ├── Hero.jsx
│       ├── About.jsx
│       ├── Services.jsx
│       ├── Portfolio.jsx         # "Selected Work" grid
│       ├── ProjectCard.jsx
│       ├── ProjectModal.jsx      # Expanded project view
│       ├── Process.jsx
│       ├── WhyWorkWithMe.jsx
│       ├── Contact.jsx
│       └── Footer.jsx
```

## Where the 5 images are stored

Your uploaded covers were copied and renamed into
`src/assets/covers/` so they build cleanly with Vite:

- `becoming-yourself.png`
- `the-summer-we-never-had.png`
- `the-house-at-midnight.png`
- `build-without-burnout.png`
- `the-wealth-habit.png`

They're imported directly in `src/data/projects.js` — no image was
regenerated, cropped, recolored, or otherwise altered.

## How to run the project

You'll need [Node.js](https://nodejs.org) 18+ installed.

```bash
cd suhana-portfolio
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build a production version:

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## How to replace or add portfolio covers

1. Drop the new image file into `src/assets/covers/` (PNG or JPG both work).
2. Open `src/data/projects.js`:
   - Update the `import` line at the top to point to the new filename, e.g.
     `import myNewCover from '../assets/covers/my-new-cover.png'`
   - Update the matching project object's `cover` field to use that import,
     or add a brand-new object to the `projects` array (copy the shape of
     an existing entry: `id`, `title`, `genre`, `theme`, `cover`,
     `description`, `approach`, `typography`, `mood`).
3. Save — the Portfolio grid and modal update automatically, since both
   are driven entirely by this one data file.

To change which cover appears in the Hero section, open
`src/components/Hero.jsx` and update the `p.id === '...'` value to match
a different project's `id`.

## Wiring up the contact form

The contact form (`src/components/Contact.jsx`) is fully interactive on
the frontend — it validates required fields and shows a confirmation
state — but it does not currently send anywhere. When you're ready to
receive real messages, connect the `handleSubmit` function to an email
service (e.g. Formspree, Resend, EmailJS) or your own API route, and
update the confirmation copy accordingly.

## How to deploy to Vercel

**Option A — via GitHub (recommended):**

1. Push this project to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New… → Project**.
3. Import the repository. Vercel auto-detects Vite — leave the defaults:
   - Build command: `vite build`
   - Output directory: `dist`
4. Click **Deploy**. Vercel gives you a live URL in about a minute.

**Option B — via the Vercel CLI:**

```bash
npm install -g vercel
cd suhana-portfolio
vercel        # follow the prompts (first deploy = preview)
vercel --prod # promote to your production URL
```

Every future push to your GitHub repo's main branch (Option A) or every
`vercel --prod` run (Option B) will redeploy the site.
