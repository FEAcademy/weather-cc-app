import { getCurrentYear } from 'utils/getCurrentYear'
import { StyledFooter } from './StyledFooter'

const Footer = () => {
  return (
    <StyledFooter>
      Weather<span>ly</span>&nbsp; - &nbsp;{getCurrentYear()}</StyledFooter>
  )
}

export { Footer }
