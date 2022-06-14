import { AppWrapper } from 'components/AppWrapper'
import { BrowserRouter as Router } from 'react-router-dom'
import 'assets/styles/index.css'

const App = () => {
  return (
    <Router>
      <AppWrapper />
    </Router>
  )
}

export default App
