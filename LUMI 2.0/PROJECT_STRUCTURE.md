# Project Structure

LUMI 2.0 — Story-Driven Parallax Experience

## Overview

This project is a **narrative-first** website where scrolling drives the story forward. Each section represents a chapter in the LUMI journey.

## Directory Structure

```
c:\PROJECT\LUMI 2.0\
│
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── layout.tsx           # Root layout with metadata & fonts
│   │   ├── page.tsx             # Main story composition
│   │   └── globals.css          # Global styles & Tailwind
│   │
│   ├── components/
│   │   └── sections/            # Story section components
│   │       ├── PrologueHero.tsx        # 1. Opening hero
│   │       ├── WorldBeforeLumi.tsx     # 2. Problem state
│   │       ├── LumiEmergence.tsx       # 3. Turning point
│   │       ├── LumiEvolution.tsx       # 4. Core themes
│   │       ├── HumanAndLumi.tsx        # 5. Human-centered
│   │       ├── FutureVision.tsx        # 6. Future vision
│   │       └── FinalCTA.tsx            # 7. Call to action
│   │
│   ├── hooks/
│   │   └── useScrollAnimations.ts  # Custom animation hooks
│   │
│   ├── types/
│   │   └── index.ts             # TypeScript type definitions
│   │
│   └── utils/
│       ├── animations.ts        # Animation configs & variants
│       ├── content.ts           # Narrative content constants
│       └── performance.ts       # Performance utilities
│
├── public/                      # Static assets (add images here)
│
├── .gitignore
├── .eslintrc.json
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies
├── postcss.config.js           # PostCSS config
├── tailwind.config.ts          # Tailwind customization
├── tsconfig.json               # TypeScript configuration
├── README.md                   # Main documentation
└── DEVELOPMENT.md              # Development guide
```

## Component Architecture

### Story Sections (7 total)

Each section is:
- **Self-contained** — Own logic, animations, layout
- **Narrative-driven** — Serves the story
- **Performance-optimized** — Dynamically imported

### Animation Strategy

**Framer Motion**: Component-level animations, viewport detection  
**GSAP + ScrollTrigger**: Complex scroll choreography, precise timing

### Content Management

All copy lives in `src/utils/content.ts`:
```typescript
export const STORY_CONTENT = {
  prologue: { ... },
  worldBefore: { ... },
  emergence: { ... },
  evolution: { ... },
  humanLumi: { ... },
  future: { ... },
  cta: { ... }
}
```

This allows:
- Content updates without touching components
- Easy translation/localization
- Consistent naming conventions

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| UI | React 18 |
| Styling | Tailwind CSS |
| Animation | Framer Motion + GSAP |
| Language | TypeScript |
| Fonts | Next.js Font Optimization |

## Design System

### Colors
```
Dark backgrounds:  lumi-darker (#050508)
                  lumi-dark (#0A0A0F)
                  lumi-muted (#1A1A24)

Light elements:    lumi-light (#F5F5F7)

Accent colors:     lumi-accent (#6366F1)
                  lumi-glow (#818CF8)
```

### Typography Scale
```
Display:  text-5xl → text-7xl → text-8xl
Body:     text-xl → text-2xl → text-3xl
Small:    text-sm → text-base
```

### Spacing
```
Section padding:    py-24 → py-32 → py-40
Section padding-lg: py-32 → py-48 → py-64
```

## Key Files

| File | Purpose |
|------|---------|
| `src/app/page.tsx` | Story composition & GSAP initialization |
| `src/utils/animations.ts` | Animation constants & variants |
| `src/utils/content.ts` | All narrative content |
| `src/utils/performance.ts` | Performance utilities |
| `tailwind.config.ts` | Design tokens & theme |

## Workflow

### Development
1. Content planning in `content.ts`
2. Component structure with semantic HTML
3. Styling with Tailwind utility classes
4. Animation implementation (Framer Motion first, GSAP for complex)
5. Mobile optimization
6. Performance testing

### Adding a Section
1. Create component in `src/components/sections/`
2. Add content to `src/utils/content.ts`
3. Dynamic import in `src/app/page.tsx`
4. Test scroll sequence

## Performance Considerations

- **Code splitting**: Dynamic imports for all sections
- **Lazy loading**: Intersection Observer for images
- **Reduced motion**: Respects system preferences
- **Mobile optimization**: Simplified parallax on small screens
- **60fps target**: Smooth animations via GPU acceleration

## Accessibility

- Semantic HTML structure
- `prefers-reduced-motion` support
- Sufficient color contrast (WCAG AA)
- Keyboard navigation
- Focus management

## Next Steps

1. ✅ Core structure & sections
2. 🔄 Add images/media assets
3. 🔄 Fine-tune animation timing
4. 🔄 Mobile testing & optimization
5. 🔄 Performance audit
6. 🔄 Deployment

---

**Philosophy:** Story first. Visuals second. Effects last.

This structure supports that philosophy at every level.
