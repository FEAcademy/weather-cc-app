import styled from 'styled-components'

const Logo = styled.nav`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 120px;
  width: 100%;
  line-height: 21.6px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
`

const LogoText = styled.p`
  font-weight: 800;
  color: #707070;
`

const LogoTextLight = styled.span`
  font-weight: 300;
`

export { Logo, LogoText, LogoTextLight }
