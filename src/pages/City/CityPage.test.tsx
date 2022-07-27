import { render, screen } from 'utils';
import { CityPage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';

describe('City page', () => {
  it('should render', () => {
    render(<CityPage />);

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });

  it('should display city name after entering /cities/:city route', () => {
    const route = '/cities/wroclaw';

    render(<CityPage />, { route });

    setTimeout(async () => {
      const cityNameElement = await screen.findByText(/Wroclaw/i);
      expect(cityNameElement).toBeInTheDocument();
    }, 1000);
  });
});
