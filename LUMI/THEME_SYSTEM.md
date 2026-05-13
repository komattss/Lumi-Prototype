# Theme System Documentation

## Overview

The Lumi app uses a lightweight, custom-built theme system that supports light, dark, and system modes without external dependencies.

## Architecture

### ThemeProvider

Located in `src/components/providers/ThemeProvider.tsx`

**Features:**

- ✅ Three theme modes: `"light"`, `"dark"`, `"system"`
- ✅ Persists user preference in localStorage
- ✅ Resolves system theme using `prefers-color-scheme`
- ✅ Applies theme via class on `<html>` element
- ✅ Listens to system theme changes when mode is "system"
- ✅ Prevents flash of unstyled content (FOUC)

**Placement:**
The ThemeProvider wraps all other providers in `src/app/providers.tsx`, ensuring theme is applied before any components render.

## Usage

### Using the useTheme Hook

```tsx
"use client";

import { useTheme } from "@/components/providers/ThemeProvider";

export function MyComponent() {
  const { theme, resolvedTheme, setTheme } = useTheme();

  return (
    <div>
      <p>Current theme: {theme}</p>
      <p>Resolved theme: {resolvedTheme}</p>
      <button onClick={() => setTheme("dark")}>Dark</button>
      <button onClick={() => setTheme("light")}>Light</button>
      <button onClick={() => setTheme("system")}>System</button>
    </div>
  );
}
```

### useTheme API

```typescript
const { theme, resolvedTheme, setTheme } = useTheme();
```

**Returns:**

- `theme`: `"light" | "dark" | "system"` - The user's preference
- `resolvedTheme`: `"light" | "dark"` - The actual theme applied (system resolved)
- `setTheme`: `(theme: Theme) => void` - Function to update theme

### Pre-built Component: ThemeToggle

A ready-to-use theme toggle button is available at `src/components/common/ThemeToggle.tsx`

```tsx
import { ThemeToggle } from "@/components/common/ThemeToggle";

export function Header() {
  return (
    <header>
      <ThemeToggle />
    </header>
  );
}
```

The toggle cycles through: Light → Dark → System

## Styling Dark Mode

### Using Tailwind's dark: Modifier

```tsx
<div className="bg-white dark:bg-gray-900 text-black dark:text-white">
  <h1 className="text-blue-600 dark:text-blue-400">Hello World</h1>
</div>
```

### CSS Variables

Define theme-aware CSS variables in `src/styles/globals.css`:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
}
```

Then use them:

```tsx
<div className="bg-background text-foreground">
  Content adapts to theme automatically
</div>
```

## Tailwind Configuration

Ensure `tailwind.config.ts` has:

```typescript
const config: Config = {
  darkMode: ["class"],
  // ... rest of config
};
```

This is already configured ✅

## localStorage Key

Theme preference is stored with key: `"lumi-theme"`

## Future Enhancements

The current implementation is designed to be extended with:

- ✨ Auth-based theme preferences (sync across devices)
- ✨ User profile theme settings
- ✨ Per-route theme overrides
- ✨ Transition animations

## Best Practices

1. **Always use the hook in client components only**

   ```tsx
   "use client";
   import { useTheme } from "@/components/providers/ThemeProvider";
   ```

2. **Use resolvedTheme for conditional logic**

   ```tsx
   const { resolvedTheme } = useTheme();
   if (resolvedTheme === "dark") {
     // Do something specific for dark mode
   }
   ```

3. **Prefer Tailwind's dark: modifier over manual checks**

   ```tsx
   // ✅ Good
   <div className="bg-white dark:bg-black" />

   // ❌ Avoid
   <div className={resolvedTheme === "dark" ? "bg-black" : "bg-white"} />
   ```

4. **Don't access theme during SSR**
   The provider prevents FOUC by not rendering theme-dependent content until mounted.

## Troubleshooting

**Theme not persisting?**

- Check browser localStorage permissions
- Verify no extensions are blocking localStorage

**Flash of wrong theme?**

- The provider includes FOUC prevention
- Ensure ThemeProvider is at the root of your component tree

**System theme not updating?**

- The provider automatically listens to system changes
- Only works when theme is set to "system"

## Files Created

- ✅ `src/components/providers/ThemeProvider.tsx` - Core theme provider
- ✅ `src/components/providers/index.ts` - Barrel export
- ✅ `src/components/common/ThemeToggle.tsx` - Example toggle component
- ✅ `src/app/providers.tsx` - Updated to include ThemeProvider
