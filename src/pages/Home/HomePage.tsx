import Weather from 'api/services/Weather';
import { useCallback } from 'react';
import { AutocompleteInput } from 'components/AutocompleteInput';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { Select } from 'models/Select';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [savedLocation, setLocation] = useLocalStorage('current_location');
  const { data: weatherData } = Weather.useCity(savedLocation || '');

  const handleSelect = useCallback(
    (city: Select | null) => {
      city && setLocation(city.value);
    },
    [setLocation],
  );

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <AutocompleteInput handleSelect={handleSelect} savedLocation={savedLocation || ''} />
      <WidgetWrapper data-testid={HomePageTestIds.Widgets}>
        {savedLocation && weatherData && (
          <>
            <WeatherInfoWidget
              cloud={weatherData.current.cloud}
              precip={weatherData.current.precip_mm}
              humidity={weatherData.current.humidity}
              pressure={weatherData.current.pressure_mb}
              windSpeed={weatherData.current.wind_kph}
              gust={weatherData.current.gust_kph}
            />
            <TemperatureWidget
              icon={weatherData.current.condition.icon}
              description={weatherData.current.condition.text}
              currentTemperature={weatherData.current.temp_c}
              feelslikeTemperature={weatherData.current.feelslike_c}
            />
          </>
        )}
      </WidgetWrapper>
    </div>
  );
};

export { HomePage };
