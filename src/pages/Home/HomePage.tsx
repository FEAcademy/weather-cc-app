import Weather from 'api/services/Weather';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useEffect, useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { data } = Weather.useCity(cityName);
  const [, setLocalValue] = useLocalStorage('current_location');

  useEffect(() => {
    setLocalValue(cityName);
  }, [cityName, setLocalValue]);

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <WidgetWrapper>
        {data && (
          <>
            <WeatherInfoWidget
              cloud={data.current.cloud}
              precip={data.current.precip_mm}
              humidity={data.current.humidity}
              pressure={data.current.pressure_mb}
              windSpeed={data.current.wind_kph}
              gust={data.current.gust_kph}
            />
            <TemperatureWidget
              icon={data.current.condition.icon}
              description={data.current.condition.text}
              currentTemperature={data.current.temp_c}
              feelslikeTemperature={data.current.feelslike_c}
            />
          </>
        )}
      </WidgetWrapper>
    </div>
  );
};

export { HomePage };
