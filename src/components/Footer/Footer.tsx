import { DataTestIDS } from 'utils/data-test-ids';
import { Container, FooterText } from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <Container data-testid={DataTestIDS.FooterContainer}>
      <FooterText>
        WEATHER<span>LY</span>
        <span>&nbsp;-&nbsp;{currentYear}</span>
      </FooterText>
    </Container>
  );
};

export { Footer };
