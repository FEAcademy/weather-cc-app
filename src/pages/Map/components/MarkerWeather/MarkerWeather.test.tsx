import { weatherSuccessResponse } from 'mocks/mockData';
import { MapContainer } from 'react-leaflet';
import { screen, render, waitForElementToBeRemoved } from 'test-utils';
import { MarkerWeather } from './MarkerWeather';
import { MarkerWeatherTestIds } from './MarkerWeatherTestIds';

const renderWithMap = () => {
  render(
    <MapContainer center={[0, 0]} zoom={10} zoomControl={false} scrollWheelZoom={true}>
      <MarkerWeather pos={[0, 0]} />
    </MapContainer>,
  );
};

describe('MarkerWeather', () => {
  it('should render', () => {
    renderWithMap();

    const container = screen.getByTestId(MarkerWeatherTestIds.Container);

    expect(container).toBeInTheDocument();
  });

  it('should render content properly', async () => {
    renderWithMap();

    const icon = await screen.findByAltText('Weather Icon');
    const temperature = await screen.findByText(/25/i);
    const cityName = await screen.findByText(/Wroclaw/i);

    expect(icon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
    expect(temperature).toBeInTheDocument();
    expect(cityName).toBeInTheDocument();
  });

  it('should render and remove loader', async () => {
    renderWithMap();

    const markerLoader = screen.getByTestId(MarkerWeatherTestIds.Loader);

    expect(markerLoader).toBeInTheDocument();

    await waitForElementToBeRemoved(markerLoader).then(() => {
      expect(markerLoader).not.toBeInTheDocument();
    });
  });
});
