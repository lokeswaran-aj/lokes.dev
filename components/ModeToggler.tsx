"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const ModeToggler = () => {
  const { theme, setTheme } = useTheme()
  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className="motion-button theme-toggle relative text-white hover:text-dark-secondary inline-flex items-center justify-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 transition-transform duration-200 motion-reduce:transition-none dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-transform duration-200 motion-reduce:transition-none dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export default ModeToggler
