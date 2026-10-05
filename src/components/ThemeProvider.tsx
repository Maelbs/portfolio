"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    // Determine theme from localStorage or default to dark
    const storedTheme = localStorage.getItem("theme");
    const initialTheme = storedTheme === "light" ? "light" : "dark";
    setTheme(initialTheme);
    
    // Ensure the DOM matches the theme immediately
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Protect the 'dark' class from being stripped by Next.js during language routing
    // Next.js patches the <html> tag to update the `lang` attribute, which resets `className`.
    const observer = new MutationObserver(() => {
      const isDark = localStorage.getItem("theme") !== "light";
      const hasDarkClass = document.documentElement.classList.contains("dark");
      
      if (isDark && !hasDarkClass) {
        document.documentElement.classList.add("dark");
      } else if (!isDark && hasDarkClass) {
        document.documentElement.classList.remove("dark");
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
