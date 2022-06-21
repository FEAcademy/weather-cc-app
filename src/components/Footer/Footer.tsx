import { Container, Wrapper, Logo } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

export function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <Container data-testid={FooterTestIds.Footer}>
      <Wrapper>
        <Logo>
          Weather<span>ly</span>
          <span>&nbsp;-&nbsp;{currentYear}</span>
        </Logo>
      </Wrapper>
    </Container>
  );
}
