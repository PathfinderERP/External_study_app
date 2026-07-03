"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-1 md:p-2 rounded-lg transition-colors hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 hover:text-slate-700 dark:text-white/60 dark:hover:text-white"
      title="Toggle theme"
    >
      <Sun className="h-7 w-7 md:h-6 md:w-6 hidden dark:block" />
      <Moon className="h-7 w-7 md:h-6 md:w-6 block dark:hidden" />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
