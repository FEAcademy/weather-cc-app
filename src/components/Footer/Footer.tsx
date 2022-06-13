import styled from 'styled-components'

const Footer = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 31px 0;
`

const Text = styled.p`
  font-weight: 900;
  color: #707070;
`

const LightText = styled.span`
  font-weight: 300;
`

export { Footer, Text, LightText }
