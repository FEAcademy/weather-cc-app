import { Container } from 'components/WeatherWidgetInfo';
import { DataItem } from '../WeatherWidgetInfo';
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
    <Container data-testid={WeatherInfoWidgetTestIds.Container}>
      <DataItem label={'Cloudiness:'} value={roundedCloud + '%'} />
      <DataItem label={'Precip:'} value={roundedPrecip + ' mm'} />
      <DataItem label={'Humidity:'} value={roundedHumidity + '%'} />
      <DataItem label={'Pressure:'} value={roundedPressure + ' mb'} />
      <DataItem label={'Wind:'} value={roundedWindSpeed + ' km/h'} />
      <DataItem label={'Gusts:'} value={roundedGust + ' km/h'} />
    </Container>
  );
};

export { WeatherInfoWidget };
