import { Container, Wrapper, Logo } from './Navbar.styled';

export function Navbar() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          Weather<span>ly</span>
        </Logo>
      </Wrapper>
    </Container>
  );
}
