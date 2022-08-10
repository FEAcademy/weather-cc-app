import { render, screen } from 'test-utils';
import { CityNameLoader } from './CityNameLoader';
import { CityNameLoaderTestIds } from './CityNameLoaderTestIds';

describe('CityNameLoader', () => {
  it('should render loader', async () => {
    render(<CityNameLoader />);

    const loader = screen.getByTestId(CityNameLoaderTestIds.Loader);

    expect(loader).toBeInTheDocument();
  });
});
