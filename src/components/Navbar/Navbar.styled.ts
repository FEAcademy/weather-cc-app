import styled from 'styled-components'

export const Container = styled.nav`
  width: 100%;
  padding: 0 18px;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.9);
  height: 60px;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 18px;
  color: #707070;
  text-transform: uppercase;
  font-weight: 900;

  span {
    font-weight: 300;
  }
`
