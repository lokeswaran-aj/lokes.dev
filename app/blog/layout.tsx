import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blogs",
  description: "All my blog posts reside here",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <section>{children}</section>
}
