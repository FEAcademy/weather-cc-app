import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/Container';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <Container>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Container>
    </Router>
  );
};

export default App;
