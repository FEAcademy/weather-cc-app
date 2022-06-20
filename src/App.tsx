import { Footer } from 'components/Footer';
import { HomePage } from 'pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Container } from './Container.styled';

import 'assets/styles/index.css';

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
      <Footer />
    </Container>
  );
};

export default App;
