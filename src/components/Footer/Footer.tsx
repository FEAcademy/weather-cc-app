import { StyledFooter , FooterText, RegularText, LightText} from './Footer.styled';


export const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <StyledFooter>
            <FooterText>Weather
                <LightText>Ly</LightText>
                &nbsp;&#45;&nbsp;
                <RegularText>{currentYear}</RegularText>
            </FooterText>
        </StyledFooter>
    );
};

