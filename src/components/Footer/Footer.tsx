import { StyledFooter, LightSpan, MediumSpan } from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';

export function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <StyledFooter data-testid={FooterTestIds.Footer}>
      <div role="textContainer">
        Weather<LightSpan>ly</LightSpan>
        <MediumSpan>&nbsp;-&nbsp;{currentYear}</MediumSpan>
      </div>
    </StyledFooter>
  );
}
