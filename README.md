# Doraemon & Nobita – Haritha's Engineering Adventure

A React + Vite + React Three Fiber interactive portfolio prototype that turns Haritha's diploma project collection into a miniature 3D city.

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`.

## Current prototype

- Procedurally modelled, animated 3D cartoon-style blue robot cat guide and student explorer.
- Miniature city with six explorable portfolio locations.
- Keyboard movement (WASD / arrow keys), camera orbit, interaction key (E), vehicle toggle (V), and an automatic tour.
- Context-specific dialogue sequence and optional opening story.
- Education, project, skills, and contact information panels.
- Project metadata separated into `src/data/portfolio.js`.
- Original static portfolio preserved in `legacy/`.

## Important asset note

The current characters are original procedural Three.js stand-ins, not downloaded/licensed Doraemon or Nobita GLB models, and their motion is procedural rather than skeletal rig animation. Replace or augment them with properly licensed rigged GLB assets and animation clips before describing the site as a fully rigged character experience. The Rapier dependency is included for the next physics/collision pass; the current movement prototype uses bounded keyboard movement and does not yet implement full collision-aware vehicle driving.

Project problem statements, detailed feature lists, individual contributions, and demo links are only shown when available in the existing portfolio data. Missing details are deliberately not invented.

## Deployment

Deploy this Vite app on Vercel using the repository root:
- Build command: `npm run build`
- Output directory: `dist`

The existing static site is retained under `legacy/` for reference.
