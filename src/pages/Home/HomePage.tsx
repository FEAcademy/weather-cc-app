import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <WidgetWrapper>
        {data && (
          <TemperatureWidget
            feelslikeTemperature={data.current.feelslike_c}
            currentTemperature={data.current.temp_c}
            icon={data.current.condition.icon}
          />
        )}
      </WidgetWrapper>
    </div>
  );
};

export { HomePage };
