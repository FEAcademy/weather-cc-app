import { Paths } from 'enums/Paths';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { CityPage } from 'pages/City';
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
          <Route path={Paths.City} element={<CityPage />} />
          <Route path="*" element={<Navigate to={Paths.Map} />} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
};

export default App;
