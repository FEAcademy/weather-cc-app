import React from 'react'
import { Container, LightText, MediumText, Text } from './Footer.styled'

export const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <Container data-testid="Footer">
      <Text>
        WEATHER<LightText>LY</LightText>
        <MediumText>&nbsp;-&nbsp;{currYear}</MediumText>
      </Text>
    </Container>
  )
}
