import { WeatherWidget } from 'components/WeatherWidget';
import { WeatherInfoWidgetTestIds } from './WeatherInfoWidgetTestIds';

interface Props {
  humidity: number;
  precip: number;
  pressure: number;
  windSpeed: number;
  cloud: number;
  gust: number;
}

const WeatherInfoWidget = ({ humidity, precip, pressure, windSpeed, cloud, gust }: Props) => {
  const roundedHumidity = Math.round(humidity);
  const roundedPrecip = Math.round(precip);
  const roundedPressure = Math.round(pressure);
  const roundedWindSpeed = Math.round(windSpeed);
  const roundedCloud = Math.round(cloud);
  const roundedGust = Math.round(gust);

  return (
    <WeatherWidget data-testid={WeatherInfoWidgetTestIds.Container}>
      <WeatherWidget.DataItem label={'Cloudiness:'} value={roundedCloud + '%'} />
      <WeatherWidget.DataItem label={'Precip:'} value={roundedPrecip + ' mm'} />
      <WeatherWidget.DataItem label={'Humidity:'} value={roundedHumidity + '%'} />
      <WeatherWidget.DataItem label={'Pressure:'} value={roundedPressure + ' mb'} />
      <WeatherWidget.DataItem label={'Wind:'} value={roundedWindSpeed + ' km/h'} />
      <WeatherWidget.DataItem label={'Gusts:'} value={roundedGust + ' km/h'} />
    </WeatherWidget>
  );
};

export { WeatherInfoWidget };
