import { TileLayer } from 'react-leaflet';
import { PlaceMarkers } from './components/PlaceMarkers';
import { StyledMapContainer, MapWrapper } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestIds';

const initialBounds = '(50.72167742756552,16.311950683593754,51.48993452350156,17.76351928710938)';
const initialZoom = 10;

const MapPage = () => {
  const localization = { long: 17.038, lat: 51.107 };

  return (
    <MapWrapper data-testid={MapPageTestIds.MapPage}>
      <StyledMapContainer
        center={[localization.lat, localization.long]}
        zoom={10}
        zoomControl={false}
        scrollWheelZoom={true}
        minZoom={8}
        maxZoom={14}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <PlaceMarkers boundsCoordinates={initialBounds} zoom={initialZoom} />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { MapPage };
