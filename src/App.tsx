import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';


const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Navbar />
        <PageContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </PageContainer>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
