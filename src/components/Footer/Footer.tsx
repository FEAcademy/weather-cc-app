import React from 'react'
import { Container, Text } from './Footer.styled'

export const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <Container>
      <Text data-testid="Footer">
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currYear}</span>
      </Text>
    </Container>
  )
}
