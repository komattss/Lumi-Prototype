"use client";

import { useTheme } from "@/components/providers/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const Icon = theme === "light" ? Sun : Moon;

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="transition-all duration-300 hover:scale-110 active:scale-95"
    >
      <Icon className="h-5 w-5 transition-all duration-300 hover:rotate-180" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
