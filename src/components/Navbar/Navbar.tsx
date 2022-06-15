import { Container, Wrapper, BoldText, SpanText, Logo } from './Navbar.styled'

export const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <BoldText>WEATHER</BoldText>
          <SpanText>LY</SpanText>
        </Logo>
      </Wrapper>
    </Container>
  )
}
