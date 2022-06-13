import { yearUpdate } from 'features/YearUpdater/yearUpdate'
import { StyledFooter } from './StyledFooter'

const Footer = () => {

  return (
    <StyledFooter><span>WEATHER</span>ly - <span>{yearUpdate()}</span></StyledFooter>
  )
}

export { Footer }
