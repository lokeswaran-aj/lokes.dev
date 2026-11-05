"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

/** First beat of the hero sequence. */
export default function PortraitEntrance({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </motion.div>
  )
}
