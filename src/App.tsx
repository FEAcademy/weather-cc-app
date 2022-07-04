import { Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
};

export default App;
