import { render, screen, waitForElementToBeRemoved } from 'utils';
import { MarkerWeatherTestIds } from './components/MarkerWeather/MarkerWeatherTestIds';
import { MapPage } from './MapPage';
import { MapPageTestIds } from './MapPageTestIds';

describe('Map page', () => {
  it('should render map container', async () => {
    render(<MapPage />);

    expect(await screen.findByTestId(MapPageTestIds.MapPage)).toBeInTheDocument();
  });
  it('should render markerWeather', async () => {
    render(<MapPage />);
    const markerWeather = await screen.findByTestId(MarkerWeatherTestIds.Container);

    expect(markerWeather).toBeInTheDocument();
  });
  it('should render and remove marker weather loader', async () => {
    render(<MapPage />);

    const markerLoader = screen.getByTestId(MarkerWeatherTestIds.Loader);

    expect(markerLoader).toBeInTheDocument();

    await waitForElementToBeRemoved(markerLoader).then(() => {
      expect(markerLoader).not.toBeInTheDocument();
    });
  });
});
