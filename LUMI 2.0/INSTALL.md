# LUMI 2.0 — Installation & Setup

## Quick Install

Run this in PowerShell:

```powershell
# Navigate to project directory
cd "c:\PROJECT\LUMI 2.0"

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open: **http://localhost:3000**

## First Time Setup

### 1. Install Node.js (if needed)
Download from: https://nodejs.org/
Required version: **18.x or higher**

Check your version:
```powershell
node --version
```

### 2. Install Dependencies

```powershell
npm install
```

This will install:
- ✅ Next.js 14
- ✅ React 18
- ✅ Framer Motion
- ✅ GSAP
- ✅ Tailwind CSS
- ✅ TypeScript

### 3. Run Development Server

```powershell
npm run dev
```

The site will be available at:
- **Local**: http://localhost:3000
- **Network**: http://[your-ip]:3000

### 4. Build for Production

```powershell
npm run build
npm start
```

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Run production server |
| `npm run lint` | Check code quality |

## Troubleshooting

### Port Already in Use

If port 3000 is busy:
```powershell
npm run dev -- -p 3001
```

### Dependencies Not Installing

Clear npm cache:
```powershell
npm cache clean --force
rm -r node_modules
rm package-lock.json
npm install
```

### TypeScript Errors

Restart VS Code's TypeScript server:
- Press `Ctrl+Shift+P`
- Type "TypeScript: Restart TS Server"
- Press Enter

### Animations Not Working

Check browser console for errors:
- Press `F12` in browser
- Look for red error messages
- Most common: GSAP not loaded (refresh page)

## Development Tips

### Hot Reload
Changes to files will automatically refresh the browser.

### Error Overlay
Errors appear as full-screen overlays in development.

### Performance Mode
To test with reduced motion:
- Windows: Settings → Ease of Access → Display → Show animations
- macOS: System Preferences → Accessibility → Display → Reduce motion

## File Structure Quick Reference

```
src/
├── app/
│   ├── layout.tsx     ← Root layout
│   ├── page.tsx       ← Main story
│   └── globals.css    ← Global styles
├── components/sections/  ← Story sections
├── utils/
│   ├── animations.ts  ← Animation config
│   ├── content.ts     ← Story content
│   └── performance.ts ← Performance utils
└── hooks/             ← Custom React hooks
```

## Next Steps

1. ✅ Project installed
2. 🔄 Review [README.md](README.md) for architecture
3. 🔄 Read [DEVELOPMENT.md](DEVELOPMENT.md) for customization
4. 🔄 Explore [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md) for details
5. 🔄 Start building your story!

## Support

### Common Questions

**Q: Can I change the story content?**  
A: Yes! Edit `src/utils/content.ts`

**Q: How do I adjust animation speed?**  
A: Edit `src/utils/animations.ts`

**Q: Can I add more sections?**  
A: Yes! Follow the guide in [DEVELOPMENT.md](DEVELOPMENT.md)

**Q: Is this production-ready?**  
A: Yes, run `npm run build` and deploy.

### Resources

- 📖 [Next.js Docs](https://nextjs.org/docs)
- 🎨 [Framer Motion](https://www.framer.com/motion/)
- 🎬 [GSAP Docs](https://greensock.com/docs/)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)

---

**Ready to experience LUMI?**

```powershell
npm run dev
```

◈ **Open http://localhost:3000 and start scrolling** ◈
