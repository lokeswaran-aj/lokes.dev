import type { ReactNode } from "react"

export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-arrive flex min-w-0 flex-1 flex-col">{children}</div>
}
