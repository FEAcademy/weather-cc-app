import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Container } from 'components/Container';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

export const theme = {
  padding: {
    appPadding: '0 18px',
  },
  width: {
    appWidth: '1200px',
  },
  color: {
    logoColor: '#707070',
  },
};

const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
