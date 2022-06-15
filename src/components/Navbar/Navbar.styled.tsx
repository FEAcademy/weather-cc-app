import styled from 'styled-components'

export const Container = styled.nav`
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
  height: 60px;
  width: 100%;
  padding: 0 18px;
  display: flex;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 18px;
  font-weight: 800;
  color: #707070;
  text-transform: uppercase;

  span {
    font-weight: 300;
  }
`
