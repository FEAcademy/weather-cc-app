import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'assets/styles/index.css';
import { HomePage } from 'pages/Home';
import { Navbar } from './components/Navbar';
import { Footer } from 'components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
