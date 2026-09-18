# S. Mithun — Neo-Brutalist Portfolio

A responsive React + Vite + TypeScript + Tailwind CSS portfolio built to the supplied Neo-Brutalism design specification.

## Design system implemented

- Cream canvas `#FFFDF5`
- Pure black structure `#000000`
- Hot red `#FF6B6B`
- Vivid yellow `#FFD93D`
- Soft violet `#C4B5FD`
- Space Grotesk typography
- 4px structural borders
- Zero-blur hard shadows
- Sharp corners
- Sticker rotations and overlapping composition
- Grid/noise texture
- Mechanical button press interactions
- Card lift interactions
- Mobile navigation
- Responsive 60/40 and asymmetric layouts
- Semantic sections and keyboard focus states
- `prefers-reduced-motion` support
- No gradients, blur, soft shadows or mid-radius cards

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Personalization

Edit `src/App.tsx` to replace:
- project descriptions/links
- email address
- education details
- skills
- achievements

The design tokens are centralized in `tailwind.config.js` and the shared interaction primitives are in `src/styles.css`.

- Additional motion layer: fade-in/fade-up entrances, pulsing stickers, floating/bobbing shapes, wiggle, blink, scanline and stamped entrance effects with reduced-motion support.

- Project and stack cards now use one intersection-driven spring pop animation, replaying cleanly as they enter the viewport, with per-card stagger delays.
