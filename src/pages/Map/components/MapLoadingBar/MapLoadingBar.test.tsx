import { render, screen } from 'test-utils';
import { MapLoadingBar } from './MapLoadingBar';
import { MapLoadingBarTestIds } from './MapLoadingBarTestIds';

describe('MapLoadingBar', () => {
  it('should render', () => {
    render(<MapLoadingBar />);

    const loader = screen.getByTestId(MapLoadingBarTestIds.Loader);

    expect(loader).toBeInTheDocument();
  });
});
