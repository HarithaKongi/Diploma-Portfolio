# Character model assets

This folder is reserved for character models that you have permission to publish and use.

Expected future files:
- `doraemon.glb`
- `nobita.glb`

Before adding a model, verify that its license permits website hosting, public redistribution, modification/optimization, and commercial or portfolio use as applicable. Keep the license/attribution text alongside the model.

The React Three Fiber integration point is `src/components/CharacterAsset.jsx`. It loads a GLB/GLTF scene, clones skinned meshes safely, and plays named animation clips with crossfades. No copyrighted model is bundled in this repository. Current procedural characters remain active until suitable licensed assets are supplied.
