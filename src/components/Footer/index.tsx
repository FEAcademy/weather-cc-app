// import { Container } from './Footer'
import { Container, BoldText, SpanText } from './Footer'

const Footer = () => {
  const now = new Date()
  const currYear = now.getFullYear()
  return (
    <Container>
      <BoldText>WEATHER</BoldText>
      <SpanText weight={400}>LY</SpanText>
      <SpanText weight={900}>&nbsp;-&nbsp;{currYear}</SpanText>
    </Container>
  )
}

export default Footer
