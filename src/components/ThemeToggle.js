"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
