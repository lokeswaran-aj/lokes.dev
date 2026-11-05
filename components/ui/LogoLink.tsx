import React from "react"
import { siteConfig } from "@/config/site"
import Link from "next/link"
import Icons from "./Icons"
import { Tooltip, TooltipContent, TooltipTrigger } from "./tooltip"

interface LogoLinkProps {
  href: string
  Icon: React.ComponentType
  name: string
}

const LogoLink = ({ href, Icon, name }: LogoLinkProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Link
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={name}
          className="social-link gradient-frame relative isolate inline-flex h-8 w-8 overflow-hidden rounded-lg p-[1px]"
        >
          <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-gray-950 px-1 py-0.5 text-sm font-medium text-gray-50">
            <span aria-hidden="true"><Icon /></span>
          </span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="bottom">
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

const LogoLinks = () => {
  const { links } = siteConfig
  const { github, twitter, linkedIn, resume } = Icons
  return (
    <div className="flex gap-3">
      <LogoLink name="Github" href={links.github} Icon={github} />
      <LogoLink name="X" href={links.twitter} Icon={twitter} />
      <LogoLink name="LinkedIn" href={links.linkedin} Icon={linkedIn} />
      <LogoLink name="Resume" href={links.resume} Icon={resume} />
    </div>
  )
}

export default LogoLinks
