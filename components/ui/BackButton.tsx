import Link from "next/link"
import React from "react"

interface IBackButton {
  link: string
}
const BackButton = (props: IBackButton) => {
  const { link } = props
  return (
    <Link href={link} className="back-link inline-flex w-fit items-center gap-2 text-muted/80 mb-14">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={15}
        height={15}
        fill="none"
        className="mr-1 h-3 w-3"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M6.854 3.146a.5.5 0 0 1 0 .708L3.707 7H12.5a.5.5 0 0 1 0 1H3.707l3.147 3.146a.5.5 0 0 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 0 1 .708 0Z"
          clipRule="evenodd"
        />
      </svg>
      back
    </Link>
  )
}

export default BackButton
