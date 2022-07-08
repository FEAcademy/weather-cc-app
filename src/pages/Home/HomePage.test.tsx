import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', async () => {
    render(<HomePage />);

    expect(await screen.findByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });
  it('should render temperature widget content properly', async () => {
    render(<HomePage />);

    const weatherIcon = await screen.findByAltText('Weather widget icon');
    const feelslikeTemperature = await screen.findByText(/feels like/i);
    const currentTemperature = await screen.findByText(/25/i);

    expect(weatherIcon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
    expect(feelslikeTemperature).toBeInTheDocument();
    expect(currentTemperature).toBeInTheDocument();
  });
});
