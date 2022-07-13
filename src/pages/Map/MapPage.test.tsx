import { render, screen } from 'utils';
import { MapPage } from './MapPage';
import { MapPageTestIds } from './MapPageTestId';

describe('Map page', () => {
  it('should render map container', async () => {
    render(<MapPage />);

    expect(await screen.findByTestId(MapPageTestIds.Container)).toBeInTheDocument();
  });
});
