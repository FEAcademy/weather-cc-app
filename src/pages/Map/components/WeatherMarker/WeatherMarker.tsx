import Weather from 'api/services/Weather';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { Marker } from 'react-leaflet';
import { Link } from 'react-router-dom';
import { serializeCoordinates } from 'utils/serializeCoordinates';
import { FavoritesButton } from 'components/FavoritesButton';
import { Content, WeatherIcon, Temperature, City, ButtonWrapper } from './WeatherMarker.styled';
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

  const renderContent = () => {
    if (isLoading) {
      return <WeatherMarkerLoader />;
    }
    if (data) {
      const { condition, temp_c } = data.current;
      const roundedTemperature = Math.round(temp_c);
      return (
        <>
          <WeatherIcon src={condition.icon} alt="Weather Icon" />
          <Temperature>
            {roundedTemperature}
            <span>&deg;C</span>
          </Temperature>
          <City>{cityName}</City>
          <ButtonWrapper>
            <FavoritesButton cityName={cityName} size={13} />
          </ButtonWrapper>
        </>
      );
    }
  };

  return (
    <Link
      data-testid={WeatherMarkerTestIds.Container}
      to={`/city/${serializeCoordinates({ latitude: pos[0], longitude: pos[1] })}`}
      state={{ cityName }}
    >
      <Marker icon={DefaultIcon} position={pos} opacity={0}>
        <Content interactive={true} permanent={true} direction="top">
          {renderContent()}
        </Content>
      </Marker>
    </Link>
  );
};

export { WeatherMarker };
