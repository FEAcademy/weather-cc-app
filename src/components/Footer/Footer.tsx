import React from 'react'
import { FooterTestIds } from './FooterTestIds'
import { Wrapper } from './Wrapper'

export function Footer() {
  return (
    <Wrapper>
      <>
        <span>WEATHER</span>
        <span>LY</span>&nbsp;-&nbsp;<span data-testid={FooterTestIds.Year}>{new Date().getFullYear()}</span>
      </>
    </Wrapper>
  )
}
