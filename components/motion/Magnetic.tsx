"use client"

import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react"
import { useRef, type PointerEvent, type ReactNode } from "react"

const SPRING = { stiffness: 260, damping: 18, mass: 0.4 }

/** Pulls its child toward the cursor on fine pointers. Measures once per hover. */
export default function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const rect = useRef<DOMRect | null>(null)
  const reduce = useReducedMotion()
  const x = useSpring(useMotionValue(0), SPRING)
  const y = useSpring(useMotionValue(0), SPRING)

  const enabled = (e: PointerEvent) => !reduce && e.pointerType === "mouse"

  return (
    <motion.span
      ref={ref}
      className="inline-flex"
      style={{ x, y }}
      onPointerEnter={(e) => {
        if (enabled(e)) rect.current = ref.current?.getBoundingClientRect() ?? null
      }}
      onPointerMove={(e) => {
        const r = rect.current
        if (!r || !enabled(e)) return
        x.set((e.clientX - (r.left + r.width / 2)) * strength)
        y.set((e.clientY - (r.top + r.height / 2)) * strength)
      }}
      onPointerLeave={() => {
        rect.current = null
        x.set(0)
        y.set(0)
      }}
    >
      {children}
    </motion.span>
  )
}
