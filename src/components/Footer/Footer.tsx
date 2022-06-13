import styled from 'styled-components'

const Container = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 31px 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const BoldText = styled.p`
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;

  color: #707070;
`

const SpanText = styled.span<{ weight?: number }>`
  font-weight: ${(p) => (p.weight ? p.weight : 500)};
  font-size: 12px;
  line-height: 14px;
  color: #707070;
`

export { Container, BoldText, SpanText }
