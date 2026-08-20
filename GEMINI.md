# Three.js & React Three Fiber Workspace Rules

These guidelines are automatically applied to this workspace. Follow these best practices when editing or creating Three.js, React Three Fiber (R3F), and Drei components.

---

## 🚀 Performance & Memory Management

1. **Avoid Memory Leaks**:
   - Geometries and materials instantiated outside React lifecycles or inside custom loops must be manually disposed of (`geometry.dispose()` and `material.dispose()`).
   - Prefer using declarative Three.js tags in R3F, which handle resource disposal automatically when unmounted.
2. **Optimize Particle Systems**:
   - Do **NOT** create hundreds of individual `<mesh>` components for particles.
   - Use `points` with custom `bufferGeometry`, or use `instancedMesh` for rendering many identical 3D geometries (like floating code snippets or cubes).
3. **Use Framerate-Independent Animations**:
   - In the `useFrame((state, delta) => ...)` hook, always animate properties using the `delta` parameter (elapsed time since last frame) to ensure identical speed on 60Hz and 144Hz monitors.
   - Example:
     ```javascript
     useFrame((state, delta) => {
       meshRef.current.rotation.y += delta * 0.5; // Correct
     });
     ```

---

## 🎨 UI & Layout Separation

1. **Keep HTML/CSS Out of the Canvas**:
   - Do not nest standard HTML div/button tags inside the `<Canvas>` component unless wrapped in Drei's `<Html>` utility.
   - Keep page text, titles, navigation bars, and overlays as sibling elements to the canvas container, overlaying them using Tailwind's absolute positioning (e.g. `absolute inset-0 z-10 pointer-events-none`).
2. **Handle Canvas Pointer Events**:
   - Ensure the canvas container has proper mouse pointer events. Add `pointer-events-none` on UI overlays and `pointer-events-auto` on the canvas/interactive elements so users can interact with 3D components.

---

## 📱 Responsiveness & Asset Loading

1. **Dynamic Scaling**:
   - Scale 3D meshes, camera fields-of-view, or particle counts based on window size (check `state.size` inside R3F hooks, or use standard media queries/hooks in React).
2. **Asset Loading**:
   - Wrap 3D models or heavy assets in React `<Suspense>` to prevent blocking page render and display a loading indicator.
