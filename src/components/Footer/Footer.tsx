import { Container, Logo } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

export function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <Container data-testid={FooterTestIds.Footer}>
      <Logo>
        Weather<span>ly</span>
        <span>&nbsp;-&nbsp;{currentYear}</span>
      </Logo>
    </Container>
  );
}
