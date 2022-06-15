import styled from 'styled-components';

const NavContainer = styled.nav`
    width: 100%;
    height: 60px;
    padding: 19px 18px;
    background: rgba(255, 255, 255, 0.9);
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    align-items: center;
`;
const LogoText = styled.h1`
  color: #707070;
  font-size: 18px;
  line-height: 21.6px;
  font-weight: 800;
  text-transform: uppercase;
  > span {
    font-weight: 300;
  }
`;

export { NavContainer, Wrapper, LogoText };
