import styled from 'styled-components'

const NavContainer = styled.nav`
    width: 100%;
    height: 68px;
    background: rgba(255, 255, 255, 0.9);
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    //justify-content: space-evenly;
    padding-left: 100px; //just for now because AC requires logo only.
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
`
const LogoTxt = styled.p`
  color: #707070;
  font-size: 18px;
  font-weight: 300;
  text-transform: uppercase;
  > span {
    font-weight: 800;
  }
`

export { NavContainer, LogoTxt }
