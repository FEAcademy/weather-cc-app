import styled from 'styled-components'

const Container = styled.nav`
  width: 100%;
  position: fixed;
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  background: rgba(255, 255, 255, 0.9);
  padding: 19px 18px;
`

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: #707070;

  & > span {
    font-weight: 300;
  }
`

export { Logo, Wrapper, Container }
