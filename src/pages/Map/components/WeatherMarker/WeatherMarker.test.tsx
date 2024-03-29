import userEvent from '@testing-library/user-event';
import { MapContainer } from 'react-leaflet';
import * as router from 'react-router';
import { screen, render, waitForElementToBeRemoved } from 'test-utils';
import { FavoritesButtonTestIds } from 'components/FavoritesButton';
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
    const button = await screen.findByTestId(FavoritesButtonTestIds.Button);

    expect(icon).toHaveAttribute('src', '//cdn.weatherapi.com/weather/128x128/day/113.png');
    expect(button).toBeInTheDocument();
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

  it('checks if navigate was called', async () => {
    const navigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);

    renderWithMap();

    const loader = screen.getByTestId(WeatherMarkerTestIds.Loader);

    await waitForElementToBeRemoved(loader).then(async () => {
      const marker = screen.getByTestId(WeatherMarkerTestIds.Container);
      const user = userEvent.setup();
      await user.click(marker);
      expect(navigate).toHaveBeenCalledWith('/city/wroclaw,poland', { replace: false});
    });

    jest.clearAllMocks();
  });
});
