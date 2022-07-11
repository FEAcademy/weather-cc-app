import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <WidgetWrapper>{data && <WeatherInfoWidget humidity={data.current.humidity} />}</WidgetWrapper>
      <WidgetWrapper>
        {data && (
          <TemperatureWidget
            icon={data.current.condition.icon}
            description={data.current.condition.text}
            currentTemperature={data.current.temp_c}
          />
        )}
      </WidgetWrapper>
    </div>
  );
};

export { HomePage };
