import { useLocalStorage } from 'hooks/useLocalStorage';
import { TileLayer } from 'react-leaflet';
import { PlaceMarkers } from './components/PlaceMarkers';
import { StyledMapContainer, MapWrapper } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestIds';

const initialZoom = 10;

const MapPage = () => {
  const [currentLocation] = useLocalStorage('current_coordinates');
  const currentCoordinates: [number, number] = currentLocation ? JSON.parse(currentLocation) : [51.107, 17.038];

  return (
    <MapWrapper data-testid={MapPageTestIds.MapPage}>
      <StyledMapContainer
        center={currentCoordinates}
        zoom={initialZoom}
        zoomControl={false}
        scrollWheelZoom={true}
        minZoom={8}
        maxZoom={14}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <PlaceMarkers zoom={initialZoom} center={currentCoordinates} />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { MapPage };
