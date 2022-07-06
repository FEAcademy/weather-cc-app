import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import 'assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<AboutPage />} />
        </Routes>
      </PageContainer>
      <Footer />
    </Router>
  );
};

export default App;
