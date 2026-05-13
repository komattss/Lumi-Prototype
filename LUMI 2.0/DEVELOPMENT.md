# LUMI Development Guide

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000`

## 🎨 Customization Guide

### 1. Updating Content

All narrative content lives in `src/utils/content.ts`:

```typescript
export const STORY_CONTENT = {
  prologue: {
    title: ['Your line 1', 'Your line 2'],
    subtitle: 'Your subtitle',
  },
  // ... more sections
}
```

### 2. Adjusting Animation Timing

Edit `src/utils/animations.ts`:

```typescript
export const ANIMATION_CONFIG = {
  duration: {
    fast: 0.3,      // Quick transitions
    normal: 0.6,    // Standard animations
    slow: 1.2,      // Dramatic moments
    verySlow: 2.4,  // Cinematic reveals
  }
}
```

### 3. Modifying Colors

Update `tailwind.config.ts`:

```typescript
colors: {
  'lumi-dark': '#0A0A0F',     // Your dark color
  'lumi-accent': '#6366F1',   // Your accent
  'lumi-glow': '#818CF8',     // Your glow color
}
```

### 4. Changing Parallax Speed

In any section component:

```typescript
// Slower parallax = more distance between layers
const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '20%']) // Slow
const yForeground = useTransform(scrollYProgress, [0, 1], ['0%', '60%']) // Fast
```

## 📱 Responsive Design

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1023px`
- Desktop: `>= 1024px`

### Mobile Optimization

For each section, consider:
1. Reduce parallax intensity
2. Simplify animations
3. Adjust font sizes with Tailwind responsive classes

Example:
```tsx
<h1 className="text-4xl md:text-6xl lg:text-8xl">
  Responsive Heading
</h1>
```

## 🎬 Adding a New Section

1. **Create the component:**

```tsx
// src/components/sections/YourNewSection.tsx
'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function YourNewSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Your GSAP animations here
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="section-padding">
      {/* Your content */}
    </section>
  )
}
```

2. **Add content to `src/utils/content.ts`:**

```typescript
export const STORY_CONTENT = {
  // ... existing content
  yourSection: {
    headline: 'Your Headline',
    description: 'Your description',
  }
}
```

3. **Import in `src/app/page.tsx`:**

```typescript
const YourNewSection = dynamic(() => import('@/components/sections/YourNewSection'))

// Add to the story sequence
<YourNewSection />
```

## 🎯 Animation Best Practices

### DO:
✅ Use semantic animation purpose (comments explaining WHY, not just HOW)  
✅ Respect `prefers-reduced-motion`  
✅ Keep animations under 2s for user control  
✅ Test on mobile devices  
✅ Use `will-change` sparingly  

### DON'T:
❌ Animate multiple properties simultaneously without reason  
❌ Block scroll during animations  
❌ Use animation for decoration only  
❌ Ignore performance metrics  

## 🔧 Debugging

### Enable GSAP Markers

In development, visualize ScrollTrigger positions:

```typescript
ScrollTrigger.defaults({
  markers: true,  // Shows start/end points
})
```

### Monitor Performance

```typescript
import { usePerformanceMonitoring } from '@/utils/performance'

export default function YourComponent() {
  usePerformanceMonitoring() // Logs FPS warnings
  // ...
}
```

### Check Reduced Motion

```typescript
import { prefersReducedMotion } from '@/utils/performance'

const shouldAnimate = !prefersReducedMotion()
```

## 📦 Production Build

```bash
# Build
npm run build

# Test production build locally
npm start
```

### Optimization Checklist

- [ ] Images optimized (WebP format, compressed)
- [ ] Fonts subset to required characters
- [ ] Unused CSS purged (automatic with Tailwind)
- [ ] JavaScript chunks reasonable size
- [ ] Lighthouse score > 90

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

1. Build: `npm run build`
2. Serve the `out` or `.next` folder
3. Ensure Node.js 18+ on server

### Environment Variables

Create `.env.local` for local development:

```
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## 🐛 Common Issues

### Animations not triggering

**Solution:** Ensure GSAP context cleanup:
```typescript
useEffect(() => {
  const ctx = gsap.context(() => { /* animations */ })
  return () => ctx.revert() // ← Important!
}, [])
```

### Hydration errors

**Solution:** Use `'use client'` directive and check for `window` availability:
```typescript
if (typeof window !== 'undefined') {
  // Browser-only code
}
```

### Poor mobile performance

**Solution:** Reduce parallax on mobile:
```typescript
const isMobile = window.innerWidth < 768
const parallaxSpeed = isMobile ? 0.1 : 0.6
```

## 📚 Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [GSAP ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)
- [Next.js App Router](https://nextjs.org/docs/app)
- [Tailwind CSS](https://tailwindcss.com/docs)

## 💡 Tips

1. **Start with content** — Build the narrative before the effects
2. **Mobile first** — Design for constraints, enhance for desktop
3. **Test scroll speed** — Different users scroll at different paces
4. **Use the console** — Monitor performance and reduced-motion logs
5. **Iterate on timing** — Small adjustments make big differences

---

**Questions?** Check the main [README.md](./README.md) or review section components for implementation examples.
