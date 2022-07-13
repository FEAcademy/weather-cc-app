import { Paths } from 'enums/Paths';
import { Routes, Route, useLocation, Location } from 'react-router-dom';
import { AboutPage } from 'pages/About';
import { HomePage } from 'pages/Home';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import 'assets/styles/index.css';

const App = () => {
  const location: Location = useLocation();
  const ifInMapRoute: boolean = location.pathname === Paths.Map ? true : false;

  return (
    <>
      <Navbar ifInMapRoute={ifInMapRoute} />
      <PageContainer>
        <Routes>
          <Route path={Paths.Home} element={<HomePage />} />
          <Route path={Paths.About} element={<AboutPage />} />
        </Routes>
      </PageContainer>
      <Footer />
    </>
  );
};

export default App;
