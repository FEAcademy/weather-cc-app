import { MapContainer } from 'react-leaflet';
import styled from 'styled-components';

const StyledMapContainer = styled(MapContainer)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
`;

const MapWrapper = styled.div`
  .leaflet-control-container {
    .leaflet-bottom.leaflet-right {
      visibility: hidden;
    }
  }
`;

export { StyledMapContainer, MapWrapper };
