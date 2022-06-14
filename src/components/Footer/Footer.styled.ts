import styled from 'styled-components'

const Container = styled.footer`
  position: absolute;
  left: 0;
  bottom: 0;
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

const MediumText = styled.span`
  font-weight: 600;
`

const LightText = styled.span`
  font-weight: 300;
`

export { Container, Text, LightText, MediumText }
