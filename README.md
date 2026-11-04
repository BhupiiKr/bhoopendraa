# Bhoopendra Kumar – Academic Portfolio

A responsive Next.js App Router portfolio with nine separate routes:

- `/` Home
- `/about`
- `/research`
- `/projects`
- `/skills`
- `/teaching`
- `/publications`
- `/cv`
- `/contact`

## Run locally

1. Install Node.js 20 or newer.
2. Open this folder in a terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open http://localhost:3000.

## Deploy to Vercel

Push the project to GitHub and import the repository into Vercel. Framework preset: Next.js. Build command: `next build` (default).

## Before publishing

- Verify the email address in `app/contact/page.tsx`.
- Replace LinkedIn, GitHub and Google Scholar placeholders in `app/contact/page.tsx` with exact profile URLs.
- Add your verified CV PDF as `public/cv.pdf` and then add a download link on `app/cv/page.tsx`.
- Replace the publication-topic entries in `app/publications/page.tsx` with exact, verified citation details and links. They are deliberately labelled as research themes / working titles rather than confirmed publications.
- Review all experience and project descriptions for accuracy.

## Design notes

The mountains and forest are drawn as an inline SVG component in `components/MountainScene.tsx`, so no external landscape image is required. The palette uses cool blues, teal, green and purple accents; no yellow or orange accent colours are used. Cursive accent headings use Kaushan Script when the Google Fonts stylesheet is reachable, with a cursive fallback.
