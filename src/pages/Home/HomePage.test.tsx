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

    const description = await screen.findByText(/Sunny/i);
    const weatherIcon = await screen.findByAltText('Weather widget icon');

    expect(description).toBeInTheDocument();
    expect(weatherIcon).toHaveAttribute('src', weatherSuccessResponse.current.condition.icon);
  });
});
