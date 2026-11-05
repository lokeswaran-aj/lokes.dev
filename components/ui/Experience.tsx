"use client"

import React, { useRef } from "react"
import { motion, useInView, type Variants } from "motion/react"
import LinkText from "./LinkText"
import { EASE_OUT } from "../motion/primitives"

interface IProps {
  period: string
  link: string
  name: string
  location?: string
  descriptions: string[]
  skills: string
}

const entry: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05 } },
}

const piece: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE_OUT } },
}

const Experience = (props: IProps) => {
  const { period, link, name, location, descriptions, skills } = props
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" })

  return (
    <motion.article
      ref={ref}
      className="experience-entry sm:flex flex-row"
      data-inview={inView || undefined}
      variants={entry}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <motion.div variants={piece}>
        <p className="text-muted/80 text-sm sm:w-40 sm:mr-4 mb-2 sm:mb-0 tabular-nums">{period}</p>
      </motion.div>
      <div className="flex-1">
        <motion.div className="mb-4" variants={piece}>
          <h3><LinkText href={link} text={name} className="text-base font-medium" /></h3>
          {location && <p className="text-muted/80 text-sm">{location}</p>}
        </motion.div>
        <div className="mb-4">
          <ul className="list-disc pl-4 text-sm leading-relaxed text-pretty">
            {descriptions.map((description, index) => (
              <motion.li className="pb-2" key={index} variants={piece}>
                {description}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div className="text-sm" variants={piece}>
          Skills: <span className="text-muted/80">{skills}</span>
        </motion.div>
      </div>
    </motion.article>
  )
}

export default Experience
