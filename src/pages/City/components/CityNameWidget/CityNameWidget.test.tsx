import { render, screen } from 'test-utils';
import { CityNameLoaderTestIds } from './CityNameLoader';
import { CityNameWidget } from './CityNameWidget';
import { CityNameWidgetTestIds } from './CityNameWidgetTestIds';

describe('CityNameWidget', () => {
  it('should render loader when data is still loading', async () => {
    render(<CityNameWidget loading={true} cityName={undefined} />);

    const loader = screen.getByTestId(CityNameLoaderTestIds.Loader);

    expect(loader).toBeInTheDocument();
  });

  it('should render cityName', async () => {
    render(<CityNameWidget loading={false} cityName="Wroclaw" />);

    const cityName = screen.getByTestId(CityNameWidgetTestIds.CityName);

    expect(cityName).toBeInTheDocument();
  });
});
