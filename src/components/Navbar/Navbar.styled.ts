import styled from 'styled-components'

const Wrapper = styled.nav`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 19px 120px;
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0px 12px 20px rgba(0, 0, 0, 0.1);
`

const Logo = styled.div`
  display: flex;
`

const BoldText = styled.p`
  font-weight: 900;
  font-size: 18px;
  line-height: 21.6px;
  color: #707070;
`

const SpanText = styled.span`
  font-weight: 300;
  font-size: 18px;
  line-height: 21.6px;
  color: #707070;
`
export { Wrapper, BoldText, SpanText, Logo }
