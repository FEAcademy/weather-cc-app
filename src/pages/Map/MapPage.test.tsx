import { render, screen } from 'test-utils';
import { PlaceMarkersTestIds } from './components/PlaceMarkers';
import { MapPage } from './MapPage';
import { MapPageTestIds } from './MapPageTestIds';

describe('Map page', () => {
  it('should render map container', async () => {
    render(<MapPage />);

    expect(await screen.findByTestId(MapPageTestIds.MapPage)).toBeInTheDocument();
  });
  it('should render place markers component', async () => {
    render(<MapPage />);

    const markers = await screen.findByTestId(PlaceMarkersTestIds.Container);

    expect(markers).toBeInTheDocument();
  });
});
