import { Container, FooterText } from './Footer'

const Footer = () => {
  const now = new Date()
  const currYear = now.getFullYear()
  return (
    <Container>
      <FooterText>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currYear}</span>
      </FooterText>
    </Container>
  )
}

export default Footer
