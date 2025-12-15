"use client";

import { useTheme } from "@/contexts/ThemeContext";
import { Moon, Sun } from "lucide-react";
import styles from "./Navbar.module.css"; // Reuse navbar styles or create new ones? 
// Actually, let's make it self-contained style-wise to keep it simple, or add a class.
// I'll use inline styles or a simple className for now, integrated into the Navbar structure later.

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--foreground)", // Adjust based on context
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
            }}
            aria-label="Toggle Theme"
        >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>
    );
}
