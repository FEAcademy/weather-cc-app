import { Footer } from 'components/Footer';
import { HomePage } from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './components/AppContainer/Container.styled';
import { Navbar } from './components/Navbar';

import 'assets/styles/index.css';

const App = () => {
  return (
    <Container>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
