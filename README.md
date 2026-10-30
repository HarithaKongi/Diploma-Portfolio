# Doraemon & Nobita – Haritha's Engineering Adventure

An episode-inspired interactive 3D portfolio built on the existing diploma project collection using React, Vite, Three.js and React Three Fiber.

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
npm run preview
```

## Portfolio content preservation

The source of truth for the existing 15 project entries is `src/data/portfolio.js`. Existing project titles, summaries, technology lists, GitHub source URLs and available demo URLs are retained. The existing demo pages remain in `public/projects/`. The original traditional portfolio remains available under `/legacy/index.html`.

## Adventure experience

- Episode-style introduction with a sky-to-city camera sequence, moving clouds, a miniature vehicle entrance, the existing temporary procedural characters, dialogue, title reveal, skip and replay controls.
- Original synthesized background melody generated in the browser after the visitor starts the experience.
- Character dialogue uses the browser's speech synthesis engine with distinct pitch/rate settings and subtitles. These are synthesized placeholder voices, not authentic licensed character recordings or professional voice actors.
- Audio mixer with master, music, voice and effects controls, mute and subtitle toggles.
- Six interactive locations: Welcome Plaza, Education Academy, Mini Project Laboratory, Innovation Center, Technology Park and Contact Station.
- Project archive with category filters and original GitHub/demo links.
- Project discovery dialogue, location navigation, mini-map, smooth camera/player transitions and auto-tour.
- Keyboard and touch controls, vehicle toggle, high/low quality setting, and traditional portfolio fallback.

## Character model policy

The current procedural Doraemon/Nobita-inspired characters are temporary placeholders. No unauthorized copyrighted models, episode audio or theme music are bundled.

- Authorized GLB assets can be placed in `public/models/`.
- Read `public/models/README.md` for asset and license expectations.
- `src/components/CharacterAsset.jsx` is the reusable GLB/GLTF loader integration point for properly rigged models and named animation clips.

## Current technical boundaries

This is an interactive portfolio prototype, not a completed commercial game or animated television episode. The current intro uses Three.js scene composition and camera easing; it does not yet contain a fully authored Blender cinematic, professional character rigs, lip-synced acting, physical vehicle seating, full suspension/steering simulation, or Rapier collision-driven gameplay. Browser speech synthesis and generated oscillator music are functional placeholders for later licensed/recorded production audio.

The project cards currently display only the verified information available in the existing project data; no screenshots, descriptions, technologies or links are fabricated.

## Deployment

Netlify:
- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: `main`

The GitHub Actions workflow runs `npm install` and `npm run build` on pushes to `main` and the adventure feature branch, and on pull requests targeting `main`.
