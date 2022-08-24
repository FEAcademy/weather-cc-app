import Weather from 'api/services/Weather';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { useCallback } from 'react';
import { TemperatureWidget, TemperatureWidgetLoader } from 'components/TemperatureWidget';
import { WeatherAqiWidget, WeatherAqiWidgetLoader } from 'components/WeatherAqiWidget';
import { WeatherInfoWidget, WeatherInfoWidgetLoader } from 'components/WeatherInfoWidget';
import { AutocompleteInput } from './components/AutocompleteInput';
import { FavoritesCitiesWeatherWidget } from './components/FavoritesCitiesWeatherWidget';
import { GeolocationButton } from './components/GeolocationButton';
import { Container, SelectContainer, WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [savedLocation, setSavedLocation] = useLocalStorage<string>('current_location');
  const { data, isLoading } = Weather.useLocation(savedLocation || '');

  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <WeatherAqiWidgetLoader />
          <TemperatureWidgetLoader />
          <WeatherInfoWidgetLoader />
        </>
      );
    }

    if (data) {
      const { current } = data;
      const { condition, air_quality } = current;
      return (
        <>
          <WeatherInfoWidget
            cloud={current.cloud}
            precip={current.precip_mm}
            humidity={current.humidity}
            pressure={current.pressure_mb}
            windSpeed={current.wind_kph}
            gust={current.gust_kph}
          />
          <TemperatureWidget
            icon={condition.icon}
            description={condition.text}
            currentTemperature={current.temp_c}
            feelslikeTemperature={current.feelslike_c}
          />
          <WeatherAqiWidget
            defraIndex={air_quality['gb-defra-index']}
            so2={air_quality.so2}
            co={air_quality.co}
            no2={air_quality.no2}
            o3={air_quality.o3}
            pm25={air_quality.pm2_5}
            pm10={air_quality.pm10}
          />
        </>
      );
    }
  };

  const handleChangeSavedLocation = useCallback(
    (value: string) => {
      setSavedLocation(value);
    },
    [setSavedLocation],
  );

  return (
    <Container data-testid={HomePageTestIds.HomePage}>
      <SelectContainer>
        <AutocompleteInput onChange={handleChangeSavedLocation} value={data?.location.name || ''} />
        <GeolocationButton onGeolocation={handleChangeSavedLocation} />
      </SelectContainer>
      <WidgetWrapper data-testid={HomePageTestIds.Widgets}>{renderContent()}</WidgetWrapper>
      <FavoritesCitiesWeatherWidget />
    </Container>
  );
};

export { HomePage };
