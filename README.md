# Doraemon & Nobita – Haritha's Engineering Adventure

A React + Vite + React Three Fiber portfolio prototype that turns Haritha's diploma project collection into a miniature interactive city.

## Run locally

```bash
npm install
npm run dev
```

Build with `npm run build`.

## Current experience

- Existing procedural Doraemon/Nobita-inspired placeholder characters are retained temporarily.
- Expanded miniature city dressing: street lamps, benches, flower beds, road lane markings, curb details, trees, lit building signs and a fountain feature.
- Six navigable portfolio locations with project, education, skills and contact panels.
- Smooth follow camera that rotates with the explorer; mouse orbit remains available.
- Keyboard exploration with normalized diagonal movement, acceleration boost (Shift), brake (Space), interaction (E) and vehicle toggle (V).
- A small vehicle moves with the explorer; wheel meshes rotate while driving mode is enabled.
- Simplified building-area collision boundaries.
- Touch D-pad controls on narrow screens and a WebGL fallback linking to the preserved 2D portfolio.
- High/low render-quality toggle.
- Project metadata remains in `src/data/portfolio.js`; diploma demos remain under `public/projects/`.

## Character asset replacement point

No third-party copyrighted character model is bundled. The procedural characters remain active until properly licensed assets are supplied.

- Put authorized GLB files in `public/models/`.
- Read `public/models/README.md` for asset and license expectations.
- `src/components/CharacterAsset.jsx` provides a reusable GLB/GLTF loader with safe skinned-mesh cloning and named animation-clip crossfades.
- Replace the current procedural `Doraemon` and `Nobita` component mounts only after confirming each model's license, scale, rig and animation clip names.

## Honest implementation boundaries

This pass improves presentation, navigation, driving feel and interaction, but it is not a full vehicle simulator. Movement collision is a lightweight boundary check rather than a Rapier rigid-body world; suspension, steering wheel physics, seated skeletal poses, facial animation and cinematic character choreography still require dedicated implementation and suitable rigged assets. The current procedural characters do not become film-quality models through this environment pass.

The existing project names, summaries, technologies, source links and available demo links are preserved from the portfolio data. No unverified project claims or new projects are added.

## Deployment

Netlify build settings:
- Build command: `npm run build`
- Publish directory: `dist`
- Production branch: `main`
- Preview branch: `doraemon-nobita-engineering-adventure`

Test the branch preview before merging. The existing production branch is not modified by this work.
