import { Container, FooterText } from './Footer.styled'

export const Footer = () => {
  const now = new Date()
  const currYear = now.getFullYear()
  return (
    <Container>
      <FooterText data-testid="footer-text">
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currYear}</span>
      </FooterText>
    </Container>
  )
}
