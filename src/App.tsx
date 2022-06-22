import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/AppContainer';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Router>
    </Container>
  );
};

export default App;
