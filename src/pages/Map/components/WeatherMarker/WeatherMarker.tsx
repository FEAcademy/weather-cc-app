import Weather from 'api/services/Weather';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker } from 'react-leaflet';
import { useNavigate } from 'react-router-dom';
import { serializeCoordinates } from 'utils/serializeCoordinates';
import { Content, WeatherIcon, Temperature, City } from './WeatherMarker.styled';
import { WeatherMarkerLoader } from './WeatherMarkerLoader';
import { WeatherMarkerTestIds } from './WeatherMarkerTestIds';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

interface Props {
  pos: [number, number];
  cityName: string;
}

const WeatherMarker = ({ pos, cityName }: Props) => {
  const { data, isLoading } = Weather.useLocation(serializeCoordinates({ latitude: pos[0], longitude: pos[1] }));
  const navigate = useNavigate();

  const renderContent = () => {
    if (isLoading) {
      return <WeatherMarkerLoader />;
    }
    if (data) {
      const { condition } = data.current;
      const roundedTemperature = Math.round(data.current.temp_c);
      return (
        <>
          <WeatherIcon src={condition.icon} alt="Weather Icon" />
          <Temperature>
            {roundedTemperature}
            <span>&deg;C</span>
          </Temperature>
          <City>{cityName}</City>
        </>
      );
    }
  };

  const onCityMarkerClickHandler = () => {
    navigate(`/cities/${data?.location.name}`);
  };

  return (
    <div data-testid={WeatherMarkerTestIds.Container}>
      <Marker
        icon={DefaultIcon}
        position={pos}
        opacity={0}
        eventHandlers={{
          click: () => {
            if (!isLoading) onCityMarkerClickHandler();
          },
        }}
      >
        <Content interactive={true} permanent={true} direction="top">
          {renderContent()}
        </Content>
      </Marker>
    </div>
  );
};

export { WeatherMarker };