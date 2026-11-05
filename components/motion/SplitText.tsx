"use client"

import { motion, type Variants } from "motion/react"
import { EASE_OUT } from "./primitives"

const letter: Variants = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.6, ease: EASE_OUT } },
}

type Props = {
  text: string
  className?: string
  as?: "h1" | "h2" | "p"
  delay?: number
}

/**
 * Masked letter reveal: each letter slides up from behind its word's baseline.
 * Words stay unbroken; screen readers get the plain string.
 */
export default function SplitText({ text, className, as = "h1", delay = 0 }: Props) {
  const Component = motion[as]
  const words = text.split(" ")
  return (
    <Component
      className={className}
      aria-label={text}
      initial="hidden"
      animate="show"
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.018, delayChildren: delay } } }}
    >
      {words.map((word, wi) => (
        <span key={wi} aria-hidden="true">
          {/* Padding keeps descenders (y, j, p) inside the clip. */}
          <span className="inline-block overflow-hidden whitespace-nowrap pb-[0.12em] -mb-[0.12em] align-bottom">
            {Array.from(word).map((char, ci) => (
              <motion.span key={ci} variants={letter} className="inline-block">
                {char}
              </motion.span>
            ))}
          </span>
          {wi < words.length - 1 && " "}
        </span>
      ))}
    </Component>
  )
}
