import styled from 'styled-components'
import { Props } from './Navbar.component'

export const Wrapper = styled.nav<Props>`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 19px 120px;
  width: 100%;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: ${(props) => (props.isPageScrollable ? '0px 12px 20px rgba(0, 0, 0, 0.1)' : '')};

  h1 {
    font-size: 18px;
    color: #707070;
  }

  span:first-child {
    font-weight: 900;
  }
  span:nth-child(2) {
    font-weight: 300;
  }
`
