import { TileLayer } from 'react-leaflet';
import { StyledMapContainer, MapWrapper } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestIds';

const MapPage = () => {
  const localization: [number, number] = [51.107, 17.038];

  return (
    <MapWrapper data-testid={MapPageTestIds.MapPage}>
      <StyledMapContainer center={localization} zoom={10} zoomControl={false} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { MapPage };
