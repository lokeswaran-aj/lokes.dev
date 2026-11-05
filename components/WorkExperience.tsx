import React from "react"
import Heading from "./ui/Heading"
import { siteConfig } from "@/config/site"
import Experience from "./ui/Experience"
import { Reveal } from "./motion/primitives"

const WorkExperience = () => {
  const { work } = siteConfig
  return (
    <div className="flex flex-col items-start justify-start">
      <Reveal><Heading text="Work Experience" /></Reveal>
      <div className="flex flex-col gap-9 w-full">
        {work.map((item) => (
          <Experience key={item.name + item.period} {...item} />
        ))}
      </div>
    </div>
  )
}

export default WorkExperience
