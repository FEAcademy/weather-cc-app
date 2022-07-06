import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WidgetsContainer } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  data && console.log(data);

  return (
    <>
      <WidgetsContainer data-testid={HomePageTestIds.WidgetsContainer}>
        <TemperatureWidget />
      </WidgetsContainer>
    </>
  );
};

export { HomePage };
