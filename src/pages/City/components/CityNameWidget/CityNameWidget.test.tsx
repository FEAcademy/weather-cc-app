import { render, screen } from 'test-utils';
import { FavoritesButtonTestIds } from 'components/FavoritesButton';
import { CityNameWidget } from './CityNameWidget';
import { CityNameWidgetTestIds } from './CityNameWidgetTestIds';
import { CityNameLoaderTestIds } from './components/CityNameLoader';

describe('CityNameWidget', () => {
  it('should render loader when data is still loading', () => {
    render(<CityNameWidget loading={true} cityName={undefined} country="Poland" />);

    const loader = screen.getByTestId(CityNameLoaderTestIds.Loader);

    expect(loader).toBeInTheDocument();
  });

  it('should render cityName', () => {
    render(<CityNameWidget loading={false} cityName="Wroclaw" country="Poland" />);

    const cityName = screen.getByTestId(CityNameWidgetTestIds.CityName);

    expect(cityName).toBeInTheDocument();
  });

  it('should render favorites button', () => {
    render(<CityNameWidget loading={false} cityName="Wroclaw" country="Poland" />);

    const favoritesButton = screen.getByTestId(FavoritesButtonTestIds.Button);

    expect(favoritesButton).toBeInTheDocument();
  });
});
