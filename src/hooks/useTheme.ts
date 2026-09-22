"use client";
import { useEffect, useState, useCallback } from "react";

type Mode = "light" | "dark";

const ACCENTS: Record<string, string> = {
  Indigo: "79 70 229",
  Blue: "37 99 235",
  Violet: "124 58 237",
  Teal: "13 148 136",
  Emerald: "5 150 105",
  Rose: "225 29 72",
  Amber: "217 119 6",
};

export function useTheme() {
  const [mode, setMode] = useState<Mode>("light");
  const [accent, setAccent] = useState<string>(ACCENTS.Indigo);

  // load saved preference on mount
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("theme") || "{}");
      if (saved.mode) setMode(saved.mode);
      if (saved.accent) setAccent(saved.accent);
    } catch {}
  }, []);

  // apply to <html> whenever mode/accent changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
    document.documentElement.style.setProperty("--accent", accent);
    try {
      localStorage.setItem("theme", JSON.stringify({ mode, accent }));
    } catch {}
  }, [mode, accent]);

  const toggleMode = useCallback(() => {
    setMode((m) => (m === "light" ? "dark" : "light"));
  }, []);

  return { mode, accent, setAccent, toggleMode, ACCENTS };
}