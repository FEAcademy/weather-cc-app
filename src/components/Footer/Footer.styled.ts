import styled from 'styled-components'

const StyledFooter = styled.footer`
  width: 100%;
  height: 76px;
  color: #707070;
  font-size: 12px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  position: absolute;
  bottom: 0;
  > span {
    font-weight: 300;
  }
  > span.footer_currentYear {
    font-weight: 600;
  }
`

export { StyledFooter }
