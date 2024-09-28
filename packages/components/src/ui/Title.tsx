import { titleFont } from '@repo/fonts/fonts'
import { TitleProps } from '@repo/interfaces/interfaces'
import React from 'react'
import './title.css'

export const Title = ({ title, subTitle, className }: TitleProps) => {
  return (
    <div className={`title-container ${className}`}>
      <h1 className={`${titleFont.className} title`}>{title}</h1>
      {
        subTitle && (
          <h3 className='subtitle'>{subTitle}</h3>
        )
      }
    </div>
  )
}

