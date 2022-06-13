import React from 'react'

import { Wrapper } from './Wrapper'

export function Footer() {
  const getCurrentYear = (): number => {
    return new Date().getFullYear()
  }

  return (
    <Wrapper>
      <>
        <span>WEATHER</span>
        <span>LY</span>&nbsp;-&nbsp;<span>{getCurrentYear()}</span>
      </>
    </Wrapper>
  )
}
