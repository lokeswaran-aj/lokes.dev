"use client"

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react"
import { useEffect } from "react"

/**
 * Site-wide ambience: a neutral cursor spotlight, film grain, and a
 * scroll progress hairline. Monochrome to keep the matte look; everything
 * here animates transform/opacity only.
 */
export default function Ambient() {
  const reduce = useReducedMotion()
  const { scrollY, scrollYProgress } = useScroll()
  // Hidden until the reader actually scrolls, so short pages never show a sliver.
  const progressOpacity = useTransform(scrollY, [0, 48], [0, 1])
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 26, mass: 0.3 })

  const mx = useMotionValue(-1000)
  const my = useMotionValue(-1000)
  const sx = useSpring(mx, { stiffness: 120, damping: 22, mass: 0.6 })
  const sy = useSpring(my, { stiffness: 120, damping: 22, mass: 0.6 })

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const onMove = (e: PointerEvent) => {
      mx.set(e.clientX)
      my.set(e.clientY)
    }
    window.addEventListener("pointermove", onMove, { passive: true })
    return () => window.removeEventListener("pointermove", onMove)
  }, [reduce, mx, my])

  return (
    <>
      <motion.div aria-hidden="true" className="scroll-progress" style={{ scaleX: progress, opacity: progressOpacity }} />
      <div aria-hidden="true" className="ambient">
        <motion.span className="cursor-spotlight" style={{ x: sx, y: sy }} />
        <span className="ambient-grain" />
      </div>
    </>
  )
}
