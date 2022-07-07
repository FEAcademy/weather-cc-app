import { render, screen } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', () => {
    render(<HomePage />);

    expect(screen.getByTestId(TemperatureWidgetTestIds.Container)).toBeInTheDocument();
  });

  it('should contain weather description', async () => {
    render(<HomePage />);

    const description = await screen.findByText(/Sunny/i);

    expect(description).toBeInTheDocument();
  });
});
