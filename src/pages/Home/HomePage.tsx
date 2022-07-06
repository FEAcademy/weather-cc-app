import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureBox } from 'components/TemperatureBox';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  data && console.log(data);

  return (
    <>
      <WidgetWrapper data-testid={HomePageTestIds.WidgetWrapper}>
        <TemperatureBox />
      </WidgetWrapper>
    </>
  );
};

export { HomePage };
