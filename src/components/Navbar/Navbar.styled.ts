import styled from 'styled-components'

const NavContainer = styled.nav`
    width: 100%;
    height: 68px;
    background: rgba(255, 255, 255, 0.9);
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
`
const LogoText = styled.p`
  color: #707070;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  margin-left: 120px;
  > span {
    font-weight: 300;
  }
`

export { NavContainer, LogoText }
