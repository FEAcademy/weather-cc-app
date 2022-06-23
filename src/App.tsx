import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GlobalThemeProvider from 'theme/GlobalThemeProvider';
import { Container } from 'components/Container';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <GlobalThemeProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        <Footer />
      </GlobalThemeProvider>
    </Router>
  );
};

export default App;
