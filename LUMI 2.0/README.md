# LUMI — Story-Driven Parallax Experience

A cinematic, scroll-based narrative website for the LUMI brand. Built with Next.js, Framer Motion, and GSAP.

## 🎬 Narrative Philosophy

This is not a standard landing page. It's a **scroll-based story** where:

- **Scrolling = Progression**
- **Motion = Meaning**
- **Parallax supports storytelling**

Every animation has a narrative purpose. No decoration without intention.

## 🏗️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**:
  - Framer Motion (primary animation system)
  - GSAP + ScrollTrigger (scroll-based parallax & sequencing)
- **Language**: TypeScript
- **Performance**: 60fps target, reduced-motion support

## 📖 Story Structure

The website is divided into 7 narrative sections:

1. **PrologueHero** — The Birth of LUMI  
   Full viewport hero with slow parallax and cinematic text reveals

2. **WorldBeforeLumi** — Complexity & Overload  
   Multi-layer parallax showing fragmented digital chaos

3. **LumiEmergence** — The Turning Point  
   Transitional section where chaos dissolves and LUMI appears

4. **LumiEvolution** — Core Themes  
   Sequential scroll reveals: Connection, Simplification, Illumination, Empowerment

5. **HumanAndLumi** — Human-Centered Design  
   Gentle depth parallax showing technology serving humanity

6. **FutureVision** — Expansion & Possibility  
   Bright, spacious section with restrained motion

7. **FinalCTA** — The Invitation  
   Clear, focused call-to-action with minimal distraction

## 🚀 Getting Started

### Installation

\`\`\`bash

# Install dependencies

npm install

# Run development server

npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to experience the narrative.

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
lumi-2.0/
├── src/
│ ├── app/
│ │ ├── layout.tsx # Root layout with fonts
│ │ ├── page.tsx # Main story composition
│ │ └── globals.css # Global styles
│ ├── components/
│ │ └── sections/ # Story section components
│ │ ├── PrologueHero.tsx
│ │ ├── WorldBeforeLumi.tsx
│ │ ├── LumiEmergence.tsx
│ │ ├── LumiEvolution.tsx
│ │ ├── HumanAndLumi.tsx
│ │ ├── FutureVision.tsx
│ │ └── FinalCTA.tsx
│ ├── hooks/
│ │ └── useScrollAnimations.ts # Custom animation hooks
│ └── utils/
│ ├── animations.ts # Animation configs & variants
│ └── content.ts # Story content constants
├── tailwind.config.ts
├── tsconfig.json
└── package.json
\`\`\`

## 🎨 Design Principles

### Motion Philosophy

- **Calm over spectacle** — No aggressive animations
- **Story-driven** — Every motion serves the narrative
- **Depth via parallax** — Foreground/mid/background layering
- **Scroll = time** — Progression is controlled by the user

### Typography

- **Display text**: Large, dramatic headings with tight letter-spacing
- **Editorial text**: Generous line-height (1.8) for comfortable reading
- **Hierarchy**: Clear visual rhythm through size and weight

### Color Palette

\`\`\`
Dark backgrounds: #050508 (lumi-darker), #0A0A0F (lumi-dark)
Muted tones: #1A1A24 (lumi-muted)
Light text: #F5F5F7 (lumi-light)
Accent colors: #6366F1 (lumi-accent), #818CF8 (lumi-glow)
\`\`\`

## ⚡ Performance Considerations

- **Dynamic imports** for code-splitting
- **Reduced-motion** support via media queries
- **Mobile optimization** with simplified parallax
- **Lazy loading** for off-screen content
- **60fps target** for smooth scrolling

### Accessibility

- Respects \`prefers-reduced-motion\` system setting
- Semantic HTML structure
- Keyboard navigation support
- Sufficient color contrast ratios

## 🎯 Key Animation Techniques

### Framer Motion

Used for:

- Component-level animations
- Viewport detection (whileInView)
- Hover states
- Stagger effects

### GSAP + ScrollTrigger

Used for:

- Complex scroll-driven sequences
- Multi-element choreography
- Precise timing control
- Performance-critical animations

## 🎭 Content Management

All narrative content is centralized in \`src/utils/content.ts\`:

\`\`\`typescript
export const STORY_CONTENT = {
prologue: { ... },
worldBefore: { ... },
emergence: { ... },
// etc.
}
\`\`\`

This separation allows easy content updates without touching component logic.

## 🔧 Customization

### Changing Animation Speed

Edit \`src/utils/animations.ts\`:

\`\`\`typescript
export const ANIMATION_CONFIG = {
duration: {
fast: 0.3,
normal: 0.6,
slow: 1.2,
verySlow: 2.4,
}
}
\`\`\`

### Modifying Parallax Intensity

Adjust speed multipliers in \`ANIMATION_CONFIG.parallax\`:

\`\`\`typescript
parallax: {
slowest: 0.2, // Less movement
slow: 0.4,
normal: 0.6,
fast: 0.8, // More movement
}
\`\`\`

## 📱 Responsive Behavior

- **Desktop (1024px+)**: Full parallax experience
- **Tablet (768px-1023px)**: Moderate parallax
- **Mobile (<768px)**: Simplified parallax, maintained narrative

## 🚨 Important Notes

1. **GSAP License**: Check GSAP licensing if using in commercial projects
2. **Font Loading**: Uses Next.js font optimization for Inter
3. **Browser Support**: Modern browsers with ES6+ support
4. **Scroll Performance**: Best experienced on devices with smooth scrolling

## 🎓 Learning Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [Next.js App Router](https://nextjs.org/docs/app)

## 📄 License

This project is proprietary and confidential.

---

**Built with intention. Experienced through motion.**

◈ LUMI
