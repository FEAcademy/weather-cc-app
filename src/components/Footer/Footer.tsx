import { Container, FooterText } from './Footer.styled'

export const Footer = () => {
  const now = new Date()
  const currYear = now.getFullYear()
  return (
    <Container role={'contentinfo'}>
      <FooterText>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currYear}</span>
      </FooterText>
    </Container>
  )
}
