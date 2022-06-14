import styled from 'styled-components'

interface Props {
  isPageMap: boolean
}

export const InnerWrapper = styled.div<Props>`
  padding-bottom: ${(props) => (props.isPageMap ? '0' : '80px')};
`
