import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getWeatherInCity } from 'utils/axiosClient';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  useEffect(() => {
    getWeatherInCity('Wroclaw');
  }, []);
  return (
    <Router>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageContainer>
      <Footer />
    </Router>
  );
};

export default App;
