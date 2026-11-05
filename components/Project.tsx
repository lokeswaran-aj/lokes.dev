import React from "react"
import Heading from "./ui/Heading"
import { siteConfig } from "@/config/site"
import Experience from "./ui/Experience"
import { Reveal } from "./motion/primitives"

const Project = () => {
  return (
    <div className="flex flex-col items-start justify-start">
      <Reveal><Heading text="Projects & open source" /></Reveal>
      <div className="flex flex-col gap-9 w-full">
        {siteConfig.project.map((item) => (
          <Experience key={item.name} {...item} />
        ))}
      </div>
    </div>
  )
}

export default Project
