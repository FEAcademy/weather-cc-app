import Weather from 'api/services/Weather';
import { Container, Content, WeatherIcon, Temperature, City } from './MarkerWeather.styled';
import { MarkerWeatherLoader } from './MarkerWeatherLoader';
import { MarkerWeatherTestIds } from './MarkerWeatherTestIds';

interface Props {
  lat: number;
  lon: number;
}

const MarkerWeather = ({ lat, lon }: Props) => {
  const { data, isLoading } = Weather.useCity(`${lat},${lon}`);

  const renderContent = () => {
    if (isLoading) {
      return <MarkerWeatherLoader />;
    }
    if (data) {
      return (
        <>
          <WeatherIcon src={data.current.condition.icon} alt="Weather Icon" />
          <Temperature>
            {data.current.temp_c}
            <span>&deg;C</span>
          </Temperature>
          <City>{data.location.name}</City>
        </>
      );
    }
  };

  return (
    <div data-testid={MarkerWeatherTestIds.Container}>
      <Container position={[lat, lon]} opacity={0}>
        <Content permanent={true} direction="top">
          {renderContent()}
        </Content>
      </Container>
    </div>
  );
};

export { MarkerWeather };
