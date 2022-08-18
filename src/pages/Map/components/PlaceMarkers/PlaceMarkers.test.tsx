import { MapContainer, TileLayer } from 'react-leaflet';
import { render, screen, waitForElementToBeRemoved } from 'test-utils';
import { MapLoadingBarTestIds } from '../MapLoadingBar';
import { WeatherMarkerTestIds } from '../WeatherMarker';
import { PlaceMarkers } from './PlaceMarkers';

describe('PlaceMarkers', () => {
  const renderWithMap = () =>
    render(
      <MapContainer>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <PlaceMarkers
          boundsCoordinates="(50.72167742756552,16.311950683593754,51.48993452350156,17.76351928710938)"
          zoom={9}
        />
      </MapContainer>,
    );

  it('should display and remove loader', async () => {
    renderWithMap();

    const loader = screen.getByTestId(MapLoadingBarTestIds.Loader);

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader).then(() => {
      expect(loader).not.toBeInTheDocument();
    });
  });

  it('should render markers', async () => {
    renderWithMap();

    const markers = await screen.findAllByTestId(WeatherMarkerTestIds.Container);

    expect(markers.length).toEqual(3);
  });
});
