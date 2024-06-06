'use client'

import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTheme } from '@/components/theme-provider'
import { clientSideFunction } from '@/utils/client-utils'

export default function ClientRoute() {
  console.log('client side rendering')

  const theme = useTheme()
  const result = clientSideFunction()

  return (
    <>
      <h1 style={{ color: theme.colors.primary }}>Client Route {result}</h1>
    </>
  )
}
