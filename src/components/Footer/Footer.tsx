import { StyledFooter , FooterText, RegularText, LightText} from './Footer.styled';
import { FooterTestIds } from './FooterTestIds';


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <StyledFooter data-testid={FooterTestIds.StyledFooter}>
            <FooterText>Weather
                <LightText>Ly</LightText>
                &nbsp;&#45;&nbsp;
                <RegularText>{currentYear}</RegularText>
            </FooterText>
        </StyledFooter>
    );
};

