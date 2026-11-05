import { ThemeProvider } from "next-themes"
import React from "react"
import { TooltipProvider } from "./ui/tooltip"

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
      <TooltipProvider delayDuration={0}>{props.children}</TooltipProvider>
    </ThemeProvider>
  )
}

export default Providers
