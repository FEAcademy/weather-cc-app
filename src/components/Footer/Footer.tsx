import { yearUpdate } from 'features/YearUpdater/yearUpdate'
import { StyledFooter } from './StyledFooter'

const Footer = () => {

  return (
    <StyledFooter><span>Weather</span>ly <span> - {yearUpdate()}</span></StyledFooter>
  )
}

export { Footer }
