import { Navbar } from 'components/Navbar'
import { HomePage } from 'pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import 'assets/styles/index.css'

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
