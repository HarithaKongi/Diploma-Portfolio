# Engineering Adventure — Codebase Audit & Transformation Plan

Audit date: 2026-10-30
Repository: https://github.com/HarithaKongi/Diploma-Portfolio
Branch audited: main
Framework: React 18 + Vite 5
Rendering: Three.js 0.170, React Three Fiber 8, Drei 9
Animation: GSAP 3
Physics dependency: @react-three/rapier is installed; no audited gameplay integration confirmed.
Build command: npm run build
Install workflow: npm install (GitHub Actions, Node 20)
Package manager: npm-compatible; no package lockfile is present at the repository root.
Deployment: Vite base './'; README documents Netlify build command 'npm run build' and publish directory 'dist'. No root netlify.toml was found.

## 1. Existing content inventory

### Projects — 15 records in src/data/portfolio.js

| # | Project | Category | Technologies recorded | Existing links |
|---|---|---|---|---|
| 1 | Digital Clock Application | Diploma Mini Projects | HTML, CSS, JavaScript | GitHub |
| 2 | Todo App | Diploma Mini Projects | HTML, CSS, JavaScript | GitHub |
| 3 | Simple Calculator | Diploma Mini Projects | HTML, CSS, JavaScript | GitHub |
| 4 | Weather App | Diploma Mini Projects | HTML, CSS, JavaScript | GitHub |
| 5 | E-commerce Product Page | Diploma Mini Projects | HTML, CSS, JavaScript | GitHub |
| 6 | Simple Game | Diploma Mini Projects | HTML, CSS, JavaScript | GitHub |
| 7 | Real-Time Chat Application | Diploma Mini Projects | Node.js | GitHub |
| 8 | Data Visualization Dashboard | Diploma Mini Projects | Web technologies | GitHub |
| 9 | Color Changer | Technical Experiments | HTML, CSS, JavaScript | Local demo + GitHub |
| 10 | JavaScript Functions | Technical Experiments | JavaScript | Local demo + GitHub |
| 11 | Increment, Decrement & Addition | Technical Experiments | HTML, JavaScript | Local demo + GitHub |
| 12 | Looping Statements | Technical Experiments | JavaScript | Local demo + GitHub |
| 13 | Travel Package – Machu Picchu | Technical Experiments | HTML, CSS | Local demo + GitHub |
| 14 | Campus Cafeteria Billing System | Selected Personal Projects | HTML, CSS, JavaScript | Local demo + GitHub |
| 15 | Animated Birthday Greeting | Selected Personal Projects | HTML, CSS, JavaScript | Local demo + GitHub |

Project summaries, technology arrays, source URLs, and demo paths are already represented in the data file and must remain the source of truth. The data does not currently contain per-project problem statements, complete feature lists, screenshot arrays, or live demo URLs for all 15 projects. Those details must be added only after checking the actual project files.

### Existing project folders

- projects/ and public/projects/ contain seven standalone demo folders: birthday-greeting, campus-cafeteria-early, color-changer, functions, increment-decrement, looping-statements, and travel-package.
- The root and public copies should be compared before consolidating; do not delete either during the initial upgrade.
- legacy/ and public/legacy/ each contain a traditional portfolio fallback. Both currently show the 15-project collection and LinkedIn contact link.

### Existing profile / education information

- Name: Haritha Kongi.
- Existing biography: Computer Science student interested in software development and practical digital experiences; projects represent the diploma learning journey.
- Education panel: Diploma in Computer Engineering, Vijaya Institute of Technology for Women (VITW), Vijayawada.
- Existing panel also says Haritha continued studies in Computer Science and Engineering at RGMCET, Nandyal.
- No marks, grades, dates, or academic awards are recorded in the audited portfolio data.

### Existing skills and contact links

- Existing About panel: HTML5, CSS3, JavaScript, Responsive Design, Node.js basics.
- Existing Technology Park panel additionally lists React, TypeScript, Java, SQL, Supabase, Firebase, and Tailwind CSS. This list is hard-coded in App.jsx, not maintained in the project data file; verify before presenting it as a definitive skills inventory.
- Existing contact links: GitHub, LinkedIn, LeetCode, CodeChef. The Email link is currently mailto: with no address. No personal portfolio destination is present in the current contact panel.
- No certificate or achievement image collection was found in the inspected repository structure. Do not invent certificates, awards, or academic results.

## 2. Current 3D implementation

- src/App.jsx currently contains the main scene and much of the UI in one large file (339 lines at audit time).
- The neighbourhood has procedural Japanese-style houses, roads, crosswalks, vending machines, utility poles, fences, sakura trees, streetlights, benches, flowers, moving clouds, and six destination buildings.
- The current character meshes are original procedural placeholders named Mimo and Nori. They are not official Doraemon or Nobita models.
- A bedroom scene and a time-lab scene exist as separate scene modes. The bedroom contains a bed, desk, bookshelf, computer-like desk props, and a glowing time-machine ring.
- A simple animated intro, subtitle cards, browser SpeechSynthesis dialogue, synthesized AudioContext melody, and generated sound effects exist.
- Audio is activated from user interaction; current voice/music are not supplied recordings.
- Desktop keyboard movement (WASD/arrows), shift boost, space brake, vehicle toggle, E interaction, and OrbitControls are present.
- Mobile D-pad buttons are present, and the canvas uses touch-action:none. A true analog joystick is not present.
- Quality currently switches between two device-pixel-ratio ranges; there are not yet three measured Low/Medium/High profiles.
- WebGL fallback points to the traditional portfolio.
- GitHub Actions workflow runs npm install and npm run build on pushes to main and the adventure branch and on pull requests to main.

## 3. Verified status

- Latest main commit at audit time: 27ad1d8074afc5bf919dbcbc90c89bac7c17356c.
- GitHub Actions build run 41104648504 completed successfully.
- This confirms the configured Vite production build passed. It does not confirm real-device gameplay, complete content accuracy, live deployment, or the final acceptance criteria.
- No production deployment was triggered by this audit.

## 4. Gaps against the requested final experience

1. The six current destinations are not yet the requested six connected spaces: bedroom, engineering school, invention laboratory, technology world, achievement museum, and communication portal.
2. The bedroom's computer is not yet an interactive profile terminal. The time machine is a scene switch, not a full story interaction.
3. Projects appear in HTML lists/modals, not as 15 distinct physical inventions with clickable 3D hit targets.
4. Project presentations lack verified screenshots, problem statements, and full feature inventories.
5. No achievement/certificate museum data or assets are present.
6. Email address is missing; portfolio URL is not linked from the contact station.
7. Progress/discovery tracking is not implemented.
8. The intro currently consists of six short dialogue beats and a title card; it is not yet a 60–90 second directed cinematic with all requested story beats.
9. Current Mimo/Nori placeholders are not official Doraemon/Nobita assets. No authorized character models or recordings are present in the repository.
10. Current voice is browser SpeechSynthesis, not licensed character recordings; no real lip-sync or separate character audio tracks exist.
11. Scene modules, dialogue management, audio management, and project presentations need to be extracted from App.jsx into maintainable components/modules.
12. Mobile controls are basic D-pad controls; analog joystick, touch camera refinement, and device testing remain.
13. Quality control is binary rather than Low/Medium/High; loading progress and robust asset preloading need implementation.
14. The source tree contains duplicated legacy/demo folders that should be audited before any cleanup. Preserve them.

## 5. Proposed world layout

One connected adventure map with six discoverable destinations, using a central arrival plaza and readable signposted paths:

- **Nobita's Room / Profile Hub:** bedroom as the story start; computer terminal opens the verified biography and education summary. The bedroom is connected to the city through a portal/door rather than treated as a separate unrelated app mode.
- **Engineering School / Education:** campus courtyard, classroom, library, and lab. Only the education facts currently recorded in the portfolio are shown until additional source material is supplied.
- **Invention Laboratory / Projects:** 15 individually identifiable invention pedestals/workstations, grouped by the existing three categories. Each object opens a project dossier populated from the original project data plus verified screenshots/features.
- **Technology World / Skills:** interactive hologram stations generated from the verified skills data, with the project-specific technologies linked to the projects that use them.
- **Achievement Museum:** build the environment and interaction framework, but show an explicit “assets not supplied” state until real certificates/awards are provided.
- **Communication Portal:** verified GitHub, LinkedIn, LeetCode, CodeChef, personal portfolio and email links. Missing destinations remain absent rather than fabricated.

### Navigation / interaction contract

- Desktop: WASD/arrows to move, mouse drag to orbit, click/tap to inspect, E to interact, ESC to close, a persistent map/wayfinding overlay, and visible discovered-location progress.
- Mobile: on-screen analog joystick or accessible directional pad, one-finger camera drag, tap-to-inspect, and a compact location selector.
- Each location should be reachable both by physical exploration and an accessible navigation shortcut.
- A location counts as discovered only after the visitor enters its trigger area or opens its primary interaction.
- Reduced-motion mode, three graphics profiles, explicit sound activation, subtitles, and a non-WebGL fallback are required.

## 6. Asset and licensing gate

- Continue using the current original Mimo/Nori placeholders until authorized character assets are supplied.
- Do not use ripped episode models, episode footage, unlicensed music, voice clones, or imitations of recognizable actors.
- When supplied, each GLB/GLTF and audio file must include source, license/authorization, attribution requirements, allowed redistribution, and character/scene mapping.
- Original non-imitative voice actors may be used as temporary dialogue placeholders and must be clearly labeled as such.
- No character or voice asset should be represented as official/authentic until authorization is documented.

## 7. Implementation sequence

1. Audit and preserve the original data (this document).
2. Extract project, profile, education, skills, contact, and achievement data into validated configuration modules.
3. Modularize the React/R3F scene, character placeholders, world locations, dialogue, audio, controls, and overlays.
4. Build the connected six-location map and discovery/progress system.
5. Turn all 15 projects into individual interactive 3D invention stations and data-driven project dossiers.
6. Add the directed intro and scene-specific stories.
7. Add authorized character/audio assets only when supplied.
8. Add mobile controls, quality profiles, loading states, reduced motion, and fallback behaviour.
9. Test build, links, keyboard/touch interactions, all 15 projects, and deploy configuration before declaring completion.

## 8. Owner-supplied items needed for final fidelity

- Authorized Doraemon and Nobita 3D models (GLB/GLTF), rig/animation documentation, and written redistribution/website-use permission.
- Authorized dialogue audio files, separated by character and scene, with usage permission and subtitle transcript.
- Certificate/award images and the exact titles/dates to display, if any.
- Correct public email address and preferred portfolio URL for the communication portal.
- Any additional diploma marks/grades or academic dates only if the owner wants them displayed.
