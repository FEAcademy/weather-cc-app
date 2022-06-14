import { Footer } from 'components/Footer'
import { HomePage } from 'pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'assets/styles/index.css'
import { Wrapper } from './Wrapper'

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
