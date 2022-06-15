import styled from 'styled-components'

const NavContainer = styled.nav`
    width: 100%;
    height: 60px;
    padding: 0 18px;
    background: rgba(255, 255, 255, 0.9);
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`
const LogoText = styled.h1`
  color: #707070;
  font-size: 18px;
  font-weight: 800;
  text-transform: uppercase;
  > span {
    font-weight: 300;
  }
`

export { NavContainer, Wrapper, LogoText }
