import React from 'react'
import { Wrapper } from './Navbar.styled'

export interface Props {
  isPageScrollable: boolean
}

export function Navbar({ isPageScrollable }: Props) {
  return (
    <Wrapper isPageScrollable={isPageScrollable}>
      <h1>
        <span>WEATHER</span>
        <span>LY</span>
      </h1>
    </Wrapper>
  )
}
