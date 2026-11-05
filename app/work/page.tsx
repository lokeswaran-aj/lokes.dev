import Project from "@/components/Project"
import BackButton from "@/components/ui/BackButton"
import WorkExperience from "@/components/WorkExperience"
import type { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "Work",
  description: "Voice AI at Gnani AI, engineering at Thoughtworks, and selected projects across multilingual agents, developer tools, and generative AI.",
  alternates: { canonical: "/work" },
}

const Work = () => {
  return (
    <section>
      <BackButton link="/" />
      <h1 className="text-2xl font-bold mb-8 text-balance">Work & projects</h1>
      <div className="flex flex-col gap-14">
        <WorkExperience />
        <hr />
        <Project />
      </div>
    </section>
  )
}

export default Work
