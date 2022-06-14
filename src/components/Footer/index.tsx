import { Footer, LightSpan, MediumSpan } from './Footer'

const Index = () => {
  const currentYear: number = new Date().getFullYear()
  return (
    <Footer>
      <div>
        Weather<LightSpan>ly</LightSpan>
        <MediumSpan>&nbsp;-&nbsp;{currentYear}</MediumSpan>
      </div>
    </Footer>
  )
}

export default Index
