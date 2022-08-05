import Weather from 'api/services/Weather';
import { Marker } from 'react-leaflet';
import { Content, WeatherIcon, Temperature, City } from './MarkerWeather.styled';
import { MarkerWeatherLoader } from './MarkerWeatherLoader';
import { MarkerWeatherTestIds } from './MarkerWeatherTestIds';

interface Props {
  pos: [number, number];
}

const MarkerWeather = ({ pos }: Props) => {
  const { data, isLoading } = Weather.useCity(`${pos[0]},${pos[1]}`);

  const renderContent = () => {
    if (isLoading) {
      return <MarkerWeatherLoader />;
    }
    if (data) {
      const { condition } = data.current;
      return (
        <>
          <WeatherIcon src={condition.icon} alt="Weather Icon" />
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
      <Marker position={pos} opacity={0}>
        <Content permanent={true} direction="top">
          {renderContent()}
        </Content>
      </Marker>
    </div>
  );
};

export { MarkerWeather };
