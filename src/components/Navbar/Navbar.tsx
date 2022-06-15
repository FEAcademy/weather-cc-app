import { Logo, Wrapper, Container } from './Navbar.styled'

export function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Weather<span>Ly</span>
        </Logo>
      </Wrapper>
    </Container>
  )
}
