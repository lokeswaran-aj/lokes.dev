import Link from "next/link"
import React from "react"
import Icons from "./Icons"
import { cn } from "@/lib/utils"

type Props = {
  href: string
  text: string
  className?: string
}

const LinkText = (props: Props) => {
  const { href, text, className } = props
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-link relative inline-block mr-1",
        className
      )}
    >
      <span className="block text-sm sm:text-base">
        {text}
        <Icons.arrow />
      </span>
    </Link>
  )
}

export default LinkText
