import Footer from 'components/Footer'
import { HomePage } from 'pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import styled from 'styled-components'
import 'assets/styles/index.css'

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
`

const App = () => {
  return (
    <Wrapper>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </Wrapper>
  )
}

export default App
