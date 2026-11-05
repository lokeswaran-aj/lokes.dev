"use client"

import { motion } from "motion/react"
import type { ReactNode } from "react"

/** Plain cross-fade between routes; the content inside handles its own entrance. */
export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="flex min-w-0 flex-1 flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}
