import { Wrapper, BoldText, SpanText, Logo } from './Navbar.styled'

export const Navbar = () => {
  return (
    <Wrapper>
      <Logo>
        <BoldText>WEATHER</BoldText>
        <SpanText>LY</SpanText>
      </Logo>
      <>{/* Here goes 2 icon buttons */}</>
    </Wrapper>
  )
}
