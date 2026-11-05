import Link from "next/link"
import React from "react"
import Image from "next/image"

type Props = {
  href: string
  imageUrl: string
  imageAlt: string
  text: string
}

const BadgeAnimatedGradientBorder = (props: Props) => {
  const { href, imageUrl, imageAlt, text } = props

  return (
    <Link href={href} target="_blank" rel="noreferrer" aria-label={text} className="company-link">
      <span className="company-badge gradient-frame relative isolate inline-flex overflow-hidden rounded-full p-[1px] align-middle leading-none">
        <span className="relative z-10 inline-flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full bg-gray-950 px-2 py-0.5 text-xs leading-4 font-medium text-gray-200 gap-1.5">
          <Image
            src={imageUrl}
            width={14}
            height={14}
            alt={imageAlt}
            className="h-3.5 w-3.5 object-contain rounded-sm"
            priority
          />
          {text}
        </span>
      </span>
    </Link>
  )
}

export default BadgeAnimatedGradientBorder
