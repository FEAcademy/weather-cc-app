import { FooterText, StyledFooter } from './Footer.styled';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <FooterText>
        Weather
        <span>ly</span>
        <span>
          &nbsp; - &nbsp;{currentYear}
        </span>
      </FooterText>
    </StyledFooter>
  );
};

export { Footer };
