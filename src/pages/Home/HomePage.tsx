import Weather from 'api/services/Weather';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useState, useCallback } from 'react';
import { AutocompleteInput } from 'components/AutocompleteInput';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { Select } from 'models/Select';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName, setCityName] = useState<string>('Wroclaw');
  const { data: weatherData } = Weather.useCity(cityName);
  const [inputValue, setInputValue] = useState<string>('wroclaw');
  const [, setLocation] = useLocalStorage('current_location', 'Wroclaw');
  const { data: cityData } = Weather.useSearchCities(inputValue);

  const handleSelect = useCallback(
    (city: Select | null) => {
      city && setCityName(city.value);
      city && setLocation(city.value);
    },
    [setLocation],
  );

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <AutocompleteInput handleSelect={handleSelect} data={cityData} setInputValue={setInputValue} />
      <WidgetWrapper>
        {weatherData && (
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
