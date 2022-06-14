import { Footer } from 'components/Footer'
import { HomePage } from 'pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'assets/styles/index.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
