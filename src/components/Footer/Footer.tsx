import { Container, FooterText } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

export const Footer = () => {
  const now = new Date();
  const currYear = now.getFullYear();
  return (
    <Container data-testid={FooterTestIds.Footer}>
      <FooterText>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currYear}</span>
      </FooterText>
    </Container>
  );
};
