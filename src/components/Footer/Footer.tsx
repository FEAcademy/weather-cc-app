import { Container, FooterText } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container data-testid={FooterTestIds.Footer}>
      <FooterText>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currentYear}</span>
      </FooterText>
    </Container>
  );
};

export { Footer };
