import { ThemeProvider } from "next-themes"
import React from "react"
import { TooltipProvider } from "./ui/tooltip"
import MotionProvider from "./motion/MotionProvider"

type Props = {
  children: React.ReactNode
}

const Providers = (props: Props) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
    >
      <MotionProvider>
        <TooltipProvider delayDuration={0}>{props.children}</TooltipProvider>
      </MotionProvider>
    </ThemeProvider>
  )
}

export default Providers
