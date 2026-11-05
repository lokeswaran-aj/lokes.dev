"use client"

import { motion, type Variants } from "motion/react"
import type { ReactNode } from "react"

export const EASE_OUT = [0.22, 1, 0.36, 1] as const

/**
 * Short opacity + rise. No blur on text: it reads as out-of-focus copy.
 * `custom` carries a per-element delay; stagger parents add their own offset.
 */
export const riseIn: Variants = {
  hidden: { opacity: 0, y: 10 },
  // Only set `delay` when given: an explicit 0 would override a stagger parent's offset.
  show: (delay?: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT, ...(delay ? { delay } : {}) },
  }),
}

const VIEWPORT = { once: true, margin: "0px 0px -10% 0px" } as const

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  /** Animate on mount (above-the-fold) instead of when scrolled into view. */
  immediate?: boolean
}

export function Reveal({ children, className, delay = 0, immediate = false }: RevealProps) {
  return (
    <motion.div
      className={className}
      variants={riseIn}
      custom={delay}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: VIEWPORT })}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  /** Seconds between children. */
  gap?: number
  delay?: number
  immediate?: boolean
}

/** Parent that cascades `StaggerItem` children. */
export function Stagger({ children, className, gap = 0.06, delay = 0, immediate = false }: StaggerProps) {
  const variants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: gap, delayChildren: delay } },
  }
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      {...(immediate ? { animate: "show" } : { whileInView: "show", viewport: VIEWPORT })}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={riseIn}>
      {children}
    </motion.div>
  )
}
