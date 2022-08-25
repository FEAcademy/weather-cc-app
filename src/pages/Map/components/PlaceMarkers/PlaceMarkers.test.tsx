import { MapContainer, TileLayer } from 'react-leaflet';
import { render, screen, waitForElementToBeRemoved } from 'test-utils';
import { MapLoadingBarTestIds } from '../MapLoadingBar';
import { WeatherMarkerTestIds } from '../WeatherMarker';
import { PlaceMarkers } from './PlaceMarkers';

describe('PlaceMarkers', () => {
  const renderWithMap = () =>
    render(
      <MapContainer zoom={10} center={[51.107, 17.038]}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <PlaceMarkers zoom={10} center={[51.107, 17.038]} />
      </MapContainer>,
    );

  it('should display and remove loader', async () => {
    renderWithMap();

    const loader = await screen.findByTestId(MapLoadingBarTestIds.Loader, {}, { timeout: 1500 });

    expect(loader).toBeInTheDocument();

    await waitForElementToBeRemoved(loader).then(() => {
      expect(loader).not.toBeInTheDocument();
    });
  });

  it('should render markers', async () => {
    renderWithMap();

    const markers = await screen.findAllByTestId(WeatherMarkerTestIds.Container, {}, { timeout: 1500 });

    expect(markers.length).toEqual(3);
  });
});
