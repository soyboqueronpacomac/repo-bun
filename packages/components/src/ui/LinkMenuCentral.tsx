'use client'
import { LinkInterface } from '@repo/interfaces/interfaces'
import Link from 'next/link'
import React from 'react'
import { LinkMenuCentralStyled } from './LinkMenuCentralSyled'

export const LinkMenuCentral = ({ url, label }: LinkInterface) => {
  return (
    <LinkMenuCentralStyled href={url}>{label}</LinkMenuCentralStyled>
  )
}

