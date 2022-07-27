import { Route, Routes } from 'react-router-dom';
import { render, screen } from 'utils';
import { CityPage } from './CityPage';
import { CityPageTestIds } from './CityPageTestIds';

describe('City page', () => {
  it('should render', () => {
    render(<CityPage />);

    expect(screen.getByTestId(CityPageTestIds.Container)).toBeInTheDocument();
  });

  it('should display city name after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const cityNameElement = await screen.findByText(/Wroclaw/i);
    expect(cityNameElement).toBeInTheDocument();
  });
});
