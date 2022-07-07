import { weatherSuccessResponse } from 'mocks/mockData';
import { render, screen } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', () => {
    render(<HomePage />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });
  it('should render weather icon with correct src', async () => {
    render(<HomePage />);
    const weatherIcon = await screen.findByAltText('Weather widget icon');

    expect(weatherIcon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
  });
});
