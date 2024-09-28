'use client'
import { NavTopProps } from '@repo/interfaces/interfaces'
import React from 'react'
import styled from 'styled-components'
import { Nav } from './NavTop.styles'
import { Logo } from './Logo.ui'
import { MenuCentral } from './MenuCentral'


export const NavTop = ({ height, backgroundColor }: NavTopProps) => {
  return (
    <Nav height={height} backgroundColor={backgroundColor}>
      <Logo url={'/'} logo={'E-commercer '} subLogo={'shop'} />
      <MenuCentral />
    </Nav>
  )
}

