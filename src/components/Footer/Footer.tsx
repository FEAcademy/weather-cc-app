import { StyledFooter, LightSpan, MediumSpan } from './Footer.styled'

export function Footer() {
  const currentYear: number = new Date().getFullYear()
  return (
    <StyledFooter>
      <div>
        Weather<LightSpan>ly</LightSpan>
        <MediumSpan>&nbsp;-&nbsp;{currentYear}</MediumSpan>
      </div>
    </StyledFooter>
  )
}
