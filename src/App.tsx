import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { IWeatherData } from 'utils/IWeatherData';
import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
import { PageContainer } from './components/PageContainer';
import { HomePage } from './pages/Home';
import 'assets/styles/index.css';

const App = () => {
  const [weatherData, setWeatherData] = React.useState<IWeatherData | undefined>(undefined);
  const [errorState, setErrorState] = React.useState<string | undefined>(undefined);

  const getData = async () => {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&aqi=yes&q=xyz`,
      );

      if (response.status !== 200) {
        const data = await response.json();
        console.log(data.error.message);
        throw new Error(data.error.message);
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error: any) {
      setErrorState(error.message);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <Router>
      <Navbar />
      {weatherData?.location !== undefined && <p data-testid="city">{weatherData.location.name}</p>}
      {errorState !== undefined && <p data-testid="error">{errorState}</p>}
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
