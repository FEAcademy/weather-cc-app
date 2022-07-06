import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  data && console.log(data);

  return (
    <>
      <WidgetWrapper data-testid={HomePageTestIds.WidgetWrapper}>
        <TemperatureWidget />
      </WidgetWrapper>
    </>
  );
};

export { HomePage };
