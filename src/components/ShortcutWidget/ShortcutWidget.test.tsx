import { weatherDataInCity } from 'mocks/mockData';
import { render, screen } from 'test-utils';
import { ShortcutWidget } from './ShortcutWidget';
import { ShortcutWidgetTestIds } from './ShortcutWidgetTestIds';

describe('ShortcutWidget', () => {
  it('should render', async () => {
    render(<ShortcutWidget data={weatherDataInCity} />);

    const shortcutWidget = screen.getByTestId(ShortcutWidgetTestIds.Widget);

    expect(shortcutWidget).toBeInTheDocument();
  });

  it('should render content properly', async () => {
    render(<ShortcutWidget data={weatherDataInCity} />);

    const temperature = screen.getByText(/28/i);
    const icon = screen.getByRole('img');
    const city = screen.getByText(/Kalisz/i);

    expect(temperature).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(city).toBeInTheDocument();
  });
});
