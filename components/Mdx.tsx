import { MDXRemote } from "next-mdx-remote/rsc"
import React from "react"
import Image, { ImageProps } from "next/image"
import Link from "next/link"
import rehypePrettyCode, { Options } from "rehype-pretty-code"

const Callout = (props: { emoji: string; children: string }) => {
  return (
    <div className="px-4 py-3 border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm flex items-center text-neutral-900 dark:text-neutral-100 mb-8">
      <div className="flex items-center w-4 mr-4">{props.emoji}</div>
      <div className="w-full callout">{props.children}</div>
    </div>
  )
}

function CustomLink({ href = "", ...props }: React.ComponentPropsWithoutRef<"a">) {

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith("#")) {
    return <a href={href} {...props} />
  }

  return <a href={href} target="_blank" rel="noreferrer" {...props} />
}

const RoundedImage = (props: ImageProps) => {
  const { src, alt, width, height, ...restProps } = props
  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className="rounded-lg"
      {...restProps}
    />
  )
}

const slugify = (str: string) => {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

const createHeading = (level: number) => {
  const Header = ({ children }: { children?: React.ReactNode }) => {
    const slug = slugify(headingText(children))
    return React.createElement(
      `h${level}`,
      { id: slug, className: "hover:underline underline-offset-2" },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    )
  }
  return Header
}

function headingText(children: React.ReactNode): string {
  return React.Children.toArray(children).map((child) => {
    if (typeof child === "string" || typeof child === "number") return String(child)
    if (React.isValidElement<{ children?: React.ReactNode }>(child)) {
      return headingText(child.props.children)
    }
    return ""
  }).join("")
}

const components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  Callout,
}

const rehypePrettyCodeOptions: Options = {
  theme: "one-dark-pro",
}

const CustomMDX = (props: React.ComponentProps<typeof MDXRemote>) => {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          rehypePlugins: [[rehypePrettyCode, rehypePrettyCodeOptions]],
        },
      }}
    />
  )
}

export default CustomMDX
