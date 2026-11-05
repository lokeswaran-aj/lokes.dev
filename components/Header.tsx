"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import ModeToggler from "./ModeToggler"
import { motion } from "motion/react"

const Header = () => {
  const pathname = usePathname()
  const pages = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
  ]
  const activeIndex = Math.max(0, pages.findIndex(({ href }) => pathname === href))
  return (
    <motion.nav
      aria-label="Main navigation"
      className="gradient-frame relative isolate inline-flex rounded-full p-px"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 26, delay: 0.3 }}
    >
      <div className="nav-surface">
        <motion.span
          className="nav-indicator"
          aria-hidden="true"
          initial={false}
          animate={{ x: activeIndex * 76 }}
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
        {pages.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            aria-current={pathname === href ? "page" : undefined}
            className={cn("nav-link", pathname === href && "is-active")}
          >
            {label}
          </Link>
        ))}
        <ModeToggler />
      </div>
    </motion.nav>
  )
}

export default Header
