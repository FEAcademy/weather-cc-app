import { getCurrentYear } from 'components/Footer/utils/getCurrentYear';
import { FooterText, StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterText>
        Weather
        <span>ly</span>
        <span>
          &nbsp; - &nbsp;{getCurrentYear()}
        </span>
      </FooterText>
    </StyledFooter>
  );
};

export { Footer };
