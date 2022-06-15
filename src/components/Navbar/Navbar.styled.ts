import styled from 'styled-components'

export const Container = styled.nav`
  position: fixed;
  top: 0;
  height: 60px;
  width: 100%;
  background-color: #fff;
  padding: 0 18px;
`
export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 18px;
  text-transform: uppercase;
  font-weight: 800;
  color: #707070;
  span {
    font-weight: 300;
  }
`
