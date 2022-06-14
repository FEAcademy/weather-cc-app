import React from 'react'
import { Container, LightText, MediumText, Text } from './Footer.styled'

const Footer = () => {
  const currYear = new Date().getFullYear()

  return (
    <Container>
      <Text>
        WEATHER<LightText>LY</LightText>
        <MediumText>&nbsp;-&nbsp;{currYear}</MediumText>
      </Text>
    </Container>
  )
}

export default Footer
