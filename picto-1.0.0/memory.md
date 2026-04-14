# Project Memory

## Project Summary
- Project name: `portfolio` (ThemeWagon Picto template customized into Shravani Dasari's personal portfolio).
- Stack: React 19, Vite 6, React Router 7, Tailwind CSS 4, DaisyUI 5, Font Awesome, Swiper, `react-scroll`, `react-fast-marquee`, `react-spinners`.
- App type: single-page personal portfolio / landing page with section-based scrolling.
- Status on analysis date: app builds successfully and lint passes.

## Runbook
- Install: `npm install`
- Dev server: `npm run dev`
- Production build: `npm run build`
- Preview build: `npm run preview`
- Lint: `npm run lint`

## Environment Notes
- `.env.local` contains `VITE_REPO_NAME`.
- `vite.config.js` sets `base` to `/${env.VITE_REPO_NAME}/`.
- Router also uses `basename: /${repoName}` from `import.meta.env.VITE_REPO_NAME`.
- Result: GitHub Pages-style deployment is expected. Keep router basename and Vite base aligned.

## App Architecture
- Entry point: `src/main.jsx` mounts `RouterProvider`.
- Routing: `src/routes/Router.jsx` lazy-loads `Main` and `Home`.
- Layout: `src/layouts/Main.jsx` renders `NavBar`, routed content, `Footer`, and `ScrollToTop`.
- Pages: only `src/pages/Home.jsx`.
- Pattern: static, presentation-heavy sections composed in order on the home page.

## Home Page Section Order
1. `Introduction`
2. `Profile`
3. `WorkProcess`
4. `Portfolio`
5. `WorkTogether`
6. `Blog` (used as achievements / certifications)
7. `Profession` (used as technical skills)
8. `HappyClients` (used as tools / platforms)
9. `Testimonial` (used as career objective highlights)
10. `Contact`

## Component Responsibilities
- `NavBar.jsx`: sticky top nav using `react-scroll` links for in-page navigation; labels now match the customized portfolio sections.
- `Footer.jsx`: brand footer with section links and personal branding.
- `ScrollToTop.jsx`: fixed floating action button shown after scrolling down.
- `Loading.jsx`: suspense fallback using `HashLoader`.
- `Introduction.jsx`: hero content, CTA, summary stats, hero image.
- `Profile.jsx`: about/profile card with social links and CTA buttons.
- `WorkProcess.jsx` + `WorkSteps.jsx`: four-step personal workflow cards.
- `Portfolio.jsx` + `Projects.jsx`: six featured projects pulled from shared data.
- `Blog.jsx` + `MonoBlog.jsx`: Swiper carousel now used for achievements and certifications.
- `Profession.jsx` + `Roles.jsx`: technical skills list.
- `HappyClients.jsx`: marquee of logos repurposed as tools/platforms section.
- `Testimonial.jsx` + `TestimonialTemplate.jsx`: career objective / personal focus carousel.
- `Contact.jsx`, `Address.jsx`, `Form.jsx`: contact section with real profile info and `mailto:` form handling.

## Data Flow
- No backend integration in current UI.
- No shared state or context.
- Portfolio content is now centralized in `src/data/portfolioData.js`.
- Main content areas read profile, navigation, projects, skills, achievements, testimonials, and contact details from the shared data module.
- The `/api` proxy in `vite.config.js` points at `http://localhost:5000`, but no current frontend code calls `/api`.

## Styling Notes
- Global styling lives in `index.css`.
- Tailwind CSS 4 and DaisyUI are configured through CSS imports/plugins rather than a separate Tailwind config file.
- Custom theme tokens include `--color-picto-primary`, `--color-picto-primary-dark`, `--color-soft-white`, and `--color-soft-dark`.
- Shared utility classes:
  - `.btn-primary`
  - `.content`
  - `.section-title`
  - `.center`
  - background helpers for hero/blog sections

## Assets
- Large image assets are bundled from `src/assets`.
- Biggest optimization concern: `src/assets/images/person2.png` is about 7 MB and ends up in the production build.
- Several other PNG/JPG assets are also large and likely dominate bundle weight more than code.

## Current Quality Signals
- `npm run build`: passes.
- `npm run lint`: passes.
- No test suite present.
- No TypeScript, no schema validation, and no runtime data validation.

## Known Issues / Risks
- The contact form uses `mailto:` rather than a real backend or form service.
- Footer navigation still uses simple hash anchors while navbar uses `react-scroll`, so behavior is not fully unified.
- `vite.config.js` comment says "Allow access from network devices" while `host: false` does not expose the server on the network.
- `repoName` / `base` logic depends on `VITE_REPO_NAME`; if empty, deployment path handling should be rechecked.
- `src/assets/images/person2.png` remains a very large bundled asset and is still the main performance risk.

## Suggested Next Improvements
- Compress or replace oversized images, especially `person2.png`.
- Replace `mailto:` form handling with Formspree, EmailJS, or a backend endpoint if real submissions are needed.
- Unify footer navigation behavior with `react-scroll` if smoother in-page navigation is desired.
- Add real project screenshots and deployment links when available.
- Add a downloadable PDF resume button if the user provides a resume file meant for public download.

## Working Agreement For Future Changes
- Update this file after every meaningful code change.
- When changing behavior, record:
  - what changed
  - why it changed
  - files touched
  - follow-up items if any
- Keep deployment assumptions (`VITE_REPO_NAME`, router basename, Vite base path) in sync.

## Change Log
- 2026-04-12: Created initial project memory after full structure review, key component analysis, and quality check run.
- 2026-04-12: Converted the stock Picto template into Shravani Dasari's portfolio using resume data. Added centralized site content in `src/data/portfolioData.js`, rewired hero/about/projects/skills/achievements/contact sections, replaced placeholder social/contact details, removed unnecessary listener logic, fixed `ScrollToTop` cleanup, and updated ESLint flat config so lint ignores build output and passes.
