import { Paths } from 'enums/Paths';
import { Routes, Route } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { HomePage } from 'pages/Home';
import { MapPage } from 'pages/Map';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import 'assets/styles/index.css';

const App = () => {
  return (
    <>
      <Navbar />
      <PageContainer>
        <Routes>
          <Route path={Paths.Home} element={<HomePage />} />
          <Route path={Paths.About} element={<AboutPage />} />
          <Route path={Paths.Map} element={<MapPage />} />
          <Route path={Paths.City} element={<div>City Page</div>} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
};

export default App;
