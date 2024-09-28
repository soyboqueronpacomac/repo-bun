import { menuCentral } from '@repo/datas/datas'
import React from 'react'
import { LinkMenuCentral } from './LinkMenuCentral'

const menu = menuCentral

export const MenuCentral = () => {
  return (
    <nav>
      {
        menu.map(link => (
          <LinkMenuCentral key={link.id} url={link.url} label={link.label} />
        ))
      }
    </nav>
  )
}

