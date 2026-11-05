import React from "react"
import LinkText from "./LinkText"

interface IProps {
  period: string
  link: string
  name: string
  location?: string
  descriptions: string[]
  skills: string
}

const Experience = (props: IProps) => {
  const { period, link, name, location, descriptions, skills } = props
  return (
    <article className="sm:flex flex-row">
      <div>
        <p className="text-muted/80 text-sm sm:w-40 sm:mr-4 mb-2 sm:mb-0 tabular-nums">{period}</p>
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <h3><LinkText href={link} text={name} className="text-base font-medium" /></h3>
          {location && <p className="text-muted/80 text-sm">{location}</p>}
        </div>
        <div className="mb-4">
          <ul className="list-disc pl-4 text-sm leading-relaxed text-pretty">
            {descriptions.map((description, index) => (
              <li className="pb-2" key={index}>
                {description}
              </li>
            ))}
          </ul>
        </div>
        <div className="text-sm">
          Skills: <span className="text-muted/80">{skills}</span>
        </div>
      </div>
    </article>
  )
}

export default Experience
