import Link from "next/link"
import React from "react"
import { IconType } from "react-icons"
import cl from "clsx"

interface Props {
  text: string
  Icon?: IconType
  link: string
  className?: string | string[]
}

function LinkButton({ text, Icon, link, className }: Props) {
  return (
    <Link href={link}>
      <a
        className={cl(
          className,
          "flex cursor-pointer items-center space-x-4  transition-colors hover:text-white"
        )}
      >
        {Icon && <Icon className="h-8 w-8" />} <p>{text}</p>
      </a>
    </Link>
  )
}

export default LinkButton
