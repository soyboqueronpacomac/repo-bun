import { titleFont } from '@repo/fonts/fonts'
import { LogoProps } from '@repo/interfaces/interfaces'
import Link from 'next/link'
import React from 'react'

export const Logo = ({ url, logo, subLogo }: LogoProps) => {
  return (
    <div>
      <Link href={url}>
        <span className={`${titleFont.className}`}>{logo}</span>
        <span> | {subLogo}</span>
      </Link>
    </div>
  )
}

