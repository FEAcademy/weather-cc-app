import React from 'react'

import { Wrapper } from './Wrapper'

export function Footer() {
  return (
    <Wrapper>
      <>
        <span>WEATHER</span>
        <span>LY</span>&nbsp;-&nbsp;<span>{new Date().getFullYear()}</span>
      </>
    </Wrapper>
  )
}
