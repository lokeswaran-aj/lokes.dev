import { siteConfig } from "@/config/site"
import Image from "next/image"
import React from "react"
import LinkText from "./ui/LinkText"
import Heading from "./ui/Heading"
import LogoLinks from "./ui/LogoLink"
import Email from "./ui/email"
import BadgeAnimatedGradientBorder from "./ui/BadgeAnimatedGradientBorder"

const Hero = () => {
  const {
    name,
    role,
    currentCompany,
    currentCompanyImage,
    currentCompanyUrl,
    previousCompany,
    currentProduct,
    myImage,
    links,
  } = siteConfig
  return (
    <>
      <div className="flex flex-col items-center justify-start">
        <div className="mb-3">
          <div className="portrait-motion relative size-16">
            <span className="portrait-orbit" aria-hidden="true" />
            <Image
              src={myImage}
              width={64}
              height={64}
              alt={name}
              className="relative rounded-full"
              priority
            />
            <span className="voice-accent" aria-hidden="true">
              <span /><span /><span /><span /><span />
            </span>
          </div>
        </div>
        <h1 className="text-xl font-bold text-balance text-center">{name}</h1>
        <p className="text-lg font-medium text-muted/80 text-center text-balance">
          {role}
        </p>
        <div className="mt-3">
          <LogoLinks />
        </div>
      </div>
      <div className="mt-14">
        <Heading text="About me" />
        <div className="space-y-4 text-muted/80 leading-relaxed text-pretty">
          <p>
            I&apos;m an AI Engineer at{" "}
            <BadgeAnimatedGradientBorder
              href={currentCompanyUrl}
              imageUrl={currentCompanyImage}
              imageAlt={currentCompany}
              text={currentCompany}
            />{" "}
            building voice AI products, from the conversation itself to the
            systems that keep it running.
          </p>
          <p>
            I built and launched{" "}
            <LinkText
              href={currentProduct.url}
              text={currentProduct.name}
              className="text-primary"
            />
            , a multilingual AI astrology product that has reached 1.1M+ unique
            callers. My work connects voice agents, personalized tools, and
            persistent memory with the APIs and background processing behind them.
          </p>
          <p>
            Before that, I spent four years at{" "}
            <BadgeAnimatedGradientBorder
              href={previousCompany.url}
              imageUrl={previousCompany.image}
              imageAlt={previousCompany.name}
              text={previousCompany.name}
            />{" "}
            building payment
            systems, modernizing commerce platforms, and helping teams bring AI
            agents into software delivery. I still learn by shipping, through
            open-source projects and hackathons.
          </p>
        </div>
      </div>
      <div className="mt-14">
        <Heading text="Contact" />
        <p className="text-muted/80">
          Connect with me on{" "}
          <LinkText
            href={links.linkedin}
            text="LinkedIn"
            className="text-primary"
          />
          , follow me on{" "}
          <LinkText href={links.twitter} text="X" className="text-primary" />,
          view my code and open-source projects on{" "}
          <LinkText
            href={links.github}
            text="GitHub"
            className="text-primary"
          />
          , or email me directly at <Email />.
        </p>
      </div>
    </>
  )
}

export default Hero
