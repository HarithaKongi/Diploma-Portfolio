# Kaze-machi – Haritha's Engineering Adventure

An original anime-inspired interactive 3D portfolio set in a detailed Japanese suburban neighbourhood. Mimo (a mint-green gadget companion) and Nori (a curious student inventor) are original procedural designs created for this portfolio; they are not Doraemon or Nobita replicas.

## Run locally

```bash
npm install
npm run dev
```

Production build: `npm run build`

## Experience

- Cinematic opening, camera fly-through, animated clouds, miniature vehicle entrance, character dialogue, subtitles, skip and replay.
- Original procedural characters with idle/walking animation.
- Japanese neighbourhood details: tiled-roof homes, crosswalks, vending machines, utility poles, garden fences, cherry-blossom trees, street furniture and narrow residential roads.
- Six interactive portfolio destinations, project archive, category filters, mini-map, guided tour, keyboard/touch controls and vehicle toggle.
- Existing project records, demo URLs, GitHub links and traditional portfolio are retained.

## Asset and IP policy

This project uses original procedural character/environment artwork. It does not bundle ripped episode/game models, official character likenesses, copyrighted episode audio or theme music. The setting is an original Japanese-neighbourhood homage, not an exact reproduction of a copyrighted television set. Properly licensed GLB/GLTF assets may be integrated through `src/components/CharacterAsset.jsx`; keep license and attribution records with each asset.

## Technical boundaries

The characters are procedural Three.js models, not professionally sculpted or rigged production assets. Dialogue uses browser SpeechSynthesis and music is generated through the browser AudioContext. The neighbourhood is composed from original procedural geometry. Professional Blender cinematics, detailed facial rigs/lip-sync, advanced vehicle physics and hand-authored animation remain possible future enhancements.

## Deployment

Netlify build command: `npm run build`; publish directory: `dist`; production branch: `main`.
GitHub Actions builds on main, the adventure feature branch and pull requests to main.
