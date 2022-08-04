import { MapContainer, TileLayer } from 'react-leaflet';
import { render, screen } from 'test-utils';
import { PlaceMarkers } from './PlaceMarkers';
import { PlaceMarkersTestIds } from './PlaceMarkersTestIds';

describe('PlaceMarkers', () => {
  it('should render markers', async () => {
    render(
      <MapContainer>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <PlaceMarkers
          boundsCoordinates="(50.72167742756552,16.311950683593754,51.48993452350156,17.76351928710938)"
          zoom={9}
        />
      </MapContainer>,
    );

    const markers = await screen.findAllByTestId(PlaceMarkersTestIds.Marker);

    expect(markers.length).toEqual(3);
  });
});
