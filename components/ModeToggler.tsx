"use client"

import React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

const REVEAL_MS = 650

const ModeToggler = () => {
  const { resolvedTheme, setTheme } = useTheme()

  const toggle = () => {
    const next = resolvedTheme === "dark" ? "light" : "dark"
    const root = document.documentElement
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    if (!document.startViewTransition || reduce) {
      setTheme(next)
      return
    }

    // next-themes applies the class in an effect, too late for the view-transition
    // snapshot, so flip it here synchronously and let next-themes catch up.
    const transition = document.startViewTransition(() => {
      root.classList.remove("light", "dark")
      root.classList.add(next)
      root.style.colorScheme = next
      setTheme(next)
    })

    // New theme grows as a circle from the bottom center of the viewport.
    transition.ready.then(() => {
      const x = window.innerWidth / 2
      const y = window.innerHeight
      const radius = Math.hypot(x, y)
      root.animate(
        { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
        {
          duration: REVEAL_MS,
          easing: "cubic-bezier(0.65, 0, 0.35, 1)",
          pseudoElement: "::view-transition-new(root)",
        }
      )
    })
  }

  return (
    <button
      type="button"
      aria-label="Toggle color theme"
      className="motion-button theme-toggle relative text-white hover:text-dark-secondary inline-flex items-center justify-center"
      onClick={toggle}
    >
      <Sun className="w-4 h-4 rotate-0 scale-100 transition-transform duration-200 motion-reduce:transition-none dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute w-4 h-4 rotate-90 scale-0 transition-transform duration-200 motion-reduce:transition-none dark:rotate-0 dark:scale-100" />
    </button>
  )
}

export default ModeToggler
