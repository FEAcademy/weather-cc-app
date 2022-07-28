import { weatherSuccessResponse } from 'mocks/mockData';
import { Route, Routes } from 'react-router-dom';
import { render, screen, waitForElementToBeRemoved } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
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

  it('should display widgets', () => {
    render(<CityPage />);

    const widgets = screen.getByTestId(CityPageTestIds.Widgets);

    expect(widgets).toBeInTheDocument();
  });

  it('should render and remove widgets loader after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const aqiloader = screen.getByTestId(TemperatureWidgetTestIds.Loader);

    expect(aqiloader).toBeInTheDocument();

    await waitForElementToBeRemoved(aqiloader).then(() => {
      expect(aqiloader).not.toBeInTheDocument();
    });
  });

  it('should render temperature widget after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const temperatureWidget = await screen.findByTestId(TemperatureWidgetTestIds.Container);

    expect(temperatureWidget).toBeInTheDocument();
  });

  it('should render temperature widget content properly after entering /cities/:city route', async () => {
    const route = '/cities/wroclaw';

    render(
      <Routes>
        <Route path="/cities/:city" element={<CityPage />} />
      </Routes>,
      { route },
    );

    const weatherIcon = await screen.findByAltText('Weather widget icon');
    const description = await screen.findByText(/Sunny/i);
    const currentTemperature = await screen.findByText(/25/i);
    const feelslikeTemperature = await screen.findByText(/feels like/i);

    expect(weatherIcon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
    expect(description).toBeInTheDocument();
    expect(currentTemperature).toBeInTheDocument();
    expect(feelslikeTemperature).toBeInTheDocument();
  });
});
