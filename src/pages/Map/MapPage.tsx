import Weather from 'api/services/Weather';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { TileLayer } from 'react-leaflet';
import { PlaceMarkers } from './components/PlaceMarkers';
import { StyledMapContainer, MapWrapper } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestIds';

const initialZoom = 10;

const MapPage = () => {
  const [localValue] = useLocalStorage('current_location');
  const { data } = Weather.useLocation(localValue || 'Wroclaw');
  const location = data?.location;

  const defaultPosition: [number, number] = [51.107, 17.038];

  return (
    <MapWrapper data-testid={MapPageTestIds.MapPage}>
      <StyledMapContainer
        center={location ? [location.lat, location.lon] : defaultPosition}
        zoom={initialZoom}
        zoomControl={false}
        scrollWheelZoom={true}
        minZoom={8}
        maxZoom={14}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {location && <PlaceMarkers zoom={initialZoom} center={[location.lat, location.lon]} />}
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { MapPage };
