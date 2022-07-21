import Weather from 'api/services/Weather';
import { useState } from 'react';
import { TemperatureWidget } from 'components/TemperatureWidget';
import { WeatherAqiWidget } from 'components/WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { WeatherWidgetLoader } from 'components/WeatherWidget/WeatherWidgetLoader';
import { WidgetWrapper } from './HomePage.styled';
import { HomePageTestIds } from './HomePageTestIds';

const HomePage = () => {
  const [cityName] = useState('Wroclaw');
  const { isLoading, data } = Weather.useCity(cityName);

  const renderContent = () => {
    if (isLoading) {
      return <WeatherWidgetLoader data-testid={WeatherAqiWidgetTestIds.Loader} />;
    } else if (data) {
      return (
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
          <WeatherAqiWidget
            defraIndex={data.current.air_quality['gb-defra-index']}
            so2={data.current.air_quality.so2}
            co={data.current.air_quality.co}
            no2={data.current.air_quality.no2}
            o3={data.current.air_quality.o3}
            pm25={data.current.air_quality.pm2_5}
            pm10={data.current.air_quality.pm10}
          />
        </>
      );
    }
  };

  return (
    <div data-testid={HomePageTestIds.HomePage}>
      <WidgetWrapper>{renderContent()}</WidgetWrapper>
    </div>
  );
};

export { HomePage };
