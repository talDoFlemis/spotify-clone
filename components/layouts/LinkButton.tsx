import Link from "next/link"
import React from "react"
import { IconType } from "react-icons"

interface Props {
  text: string
  Icon?: IconType
  link: string
}

function LinkButton({ text, Icon, link }: Props) {
  return (
    <Link href={link}>
      <a className="flex cursor-pointer items-center space-x-4  transition-colors hover:text-white">
        {Icon && <Icon className="h-8 w-8" />} <p>{text}</p>
      </a>
    </Link>
  )
}

export default LinkButton
