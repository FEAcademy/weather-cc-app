import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { AppContainer } from './components/AppContainer';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <AppContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </AppContainer>
      <Footer />
    </Router>
  );
};

export default App;
