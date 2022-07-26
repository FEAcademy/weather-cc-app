import { TileLayer, useMapEvents } from 'react-leaflet';
import { StyledMapContainer, MapWrapper } from './MapPage.styled';
import { MapPageTestIds } from './MapPageTestIds';

function DataComponent() {
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
  });
  return null;
}

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
        <DataComponent />
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </StyledMapContainer>
    </MapWrapper>
  );
};

export { MapPage };
