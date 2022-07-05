import { Routes, Route } from 'react-router-dom';

import { Paths } from 'utils';
import { AboutPage } from 'pages/About';
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
          <Route path={`${Paths.About}`} element={<AboutPage />} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
};

export default App;
