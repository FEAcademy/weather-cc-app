import { MapContainer } from 'react-leaflet';
import { screen, render, waitForElementToBeRemoved } from 'test-utils';
import { WeatherMarker } from './WeatherMarker';
import { WeatherMarkerTestIds } from './WeatherMarkerTestIds';

const renderWithMap = () => {
  render(
    <MapContainer center={[0, 0]} zoom={10} zoomControl={false} scrollWheelZoom={true}>
      <WeatherMarker pos={[0, 0]} cityName={'Wroclaw'} />
    </MapContainer>,
  );
};

describe('WeatherMarker', () => {
  it('should render', () => {
    renderWithMap();

    const container = screen.getByTestId(WeatherMarkerTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should render content properly', async () => {
    renderWithMap();

    const icon = await screen.findByAltText('Weather Icon');
    const temperature = await screen.findByText(/25/i);
    const cityName = await screen.findByText(/Wroclaw/i);

    expect(icon).toHaveAttribute('src', '//cdn.weatherapi.com/weather/128x128/day/113.png');
    expect(temperature).toBeInTheDocument();
    expect(cityName).toBeInTheDocument();
  });

  it('should render and remove loader', async () => {
    renderWithMap();

    const markerLoader = screen.getByTestId(WeatherMarkerTestIds.Loader);

    expect(markerLoader).toBeInTheDocument();

    await waitForElementToBeRemoved(markerLoader).then(() => {
      expect(markerLoader).not.toBeInTheDocument();
    });
  });
});
