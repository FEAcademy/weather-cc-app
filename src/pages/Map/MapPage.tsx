import { TileLayer } from 'react-leaflet';
import { StyledMapContainer, MapWrapper } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestIds';

const MapPage = () => {
  const localization = { long: 17.038, lat: 51.107 };

  return (
    <MapWrapper data-testid={MapPageTestIds.MapPage}>
      <StyledMapContainer
        center={[localization.lat, localization.long]}
        zoom={10}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { MapPage };
