import { TemperatureWidget, TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { TemperatureWidgetLoader } from 'components/TemperatureWidget/TemperatureWidgetLoader';
import { WeatherAqiWidget } from 'components/WeatherAqiWidget';
import { WeatherAqiWidgetTestIds } from 'components/WeatherAqiWidget/WeatherAqiWidgetTestIds';
import { WeatherInfoWidget } from 'components/WeatherInfoWidget';
import { WeatherInfoWidgetTestIds } from 'components/WeatherInfoWidget/WeatherInfoWidgetTestIds';
import { WeatherWidgetLoader } from 'components/WeatherWidget/WeatherWidgetLoader';
import { Weather } from 'models/Weather';
import { Container } from './WidgetWrapper.styled';

interface Props {
  data: Weather | undefined;
  isLoading: boolean;
  'data-testid': string;
}

const WidgetWrapper = ({ data, isLoading, ...rest }: Props) => {
  const renderContent = () => {
    if (isLoading) {
      return (
        <>
          <WeatherWidgetLoader data-testid={WeatherInfoWidgetTestIds.Loader} />
          <TemperatureWidgetLoader data-testid={TemperatureWidgetTestIds.Loader} />
          <WeatherWidgetLoader data-testid={WeatherAqiWidgetTestIds.Loader} />
        </>
      );
    }

    if (data) {
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
  return <Container {...rest}>{renderContent()}</Container>;
};

export { WidgetWrapper };
