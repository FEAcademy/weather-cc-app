import { StyledFooter } from './Footer.styled'


export const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <StyledFooter>Weather<span>Ly</span>&nbsp;&#45;&nbsp;<span>{currentYear}</span></StyledFooter>
    )
}

