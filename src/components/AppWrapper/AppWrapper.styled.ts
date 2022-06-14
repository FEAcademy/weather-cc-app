import styled from 'styled-components'

interface Props {
  isPageMap: boolean
}

export const InnerWrapper = styled.div<Props>`
  padding-bottom: ${(props) => (props.isPageMap ? '0' : '80px')};
`

export const OuterWrapper = styled.div`
  position: relative;
  min-height: 100vh;
`
