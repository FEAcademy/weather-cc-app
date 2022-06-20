import { getCurrentYear } from 'components/Footer/utils/getCurrentYear';
import { StyledFooter } from './Footer.styled';

const Footer = () => {
  return (
    <StyledFooter>
      Weather
      <span>ly</span>
      <span title='currentYear'>
        &nbsp; - &nbsp;{getCurrentYear()}
      </span>
    </StyledFooter>
  );
};

export { Footer };
