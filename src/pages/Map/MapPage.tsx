import { TileLayer } from 'react-leaflet';
import { StyledMapContainer } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestId';

const MapPage = () => {
  const localization = { long: 17.038, lat: 51.107 };

  return (
    <div data-testid={MapPageTestIds.Container}>
      <StyledMapContainer
        center={[localization.lat, localization.long]}
        zoom={10}
        zoomControl={false}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </StyledMapContainer>
    </div>
  );
};

export { MapPage };
