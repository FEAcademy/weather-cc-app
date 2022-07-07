import { render, screen } from 'utils';
import { TemperatureWidgetTestIds } from 'components/TemperatureWidget';
import { HomePage } from './HomePage';

describe('Home page', () => {
  it('should render temperature widget', async () => {
    render(<HomePage />);

    const tempWidget = await screen.findByTestId(TemperatureWidgetTestIds.Container);

    expect(tempWidget).toBeInTheDocument();
  });
});
