"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"
import ModeToggler from "./ModeToggler"

const Header = () => {
  const pathname = usePathname()
  const pages = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
  ]
  const activeIndex = Math.max(0, pages.findIndex(({ href }) => pathname === href))
  return (
    <nav aria-label="Main navigation" className="nav-motion gradient-frame relative isolate inline-flex rounded-full p-px">
      <div className="nav-surface" data-active-index={activeIndex}>
        <span className="nav-indicator" aria-hidden="true" />
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
    </nav>
  )
}

export default Header
